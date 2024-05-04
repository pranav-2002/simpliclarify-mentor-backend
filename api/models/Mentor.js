'use strict'

import { CustomError } from '../helpers'
import { sendMail } from '../helpers/sendEmailTemplate'
import { getCompanyLogo, getUniversityLogo } from '../helpers/mentorExtraInfo'
import Mentor from '../schemas/Mentor'
import RejectMentor from '../schemas/RejectMentor'
import MentorRequestProfile from '../schemas/MentorUpdateProfile'
import _Booking from '../schemas/_Booking'
import _User from '../schemas/_User'
import MailTemplate from './../schemas/MailTemplate'
import MailTemplateModel from './MailTemplate'
import unescapeJs from 'unescape-js'

const MentorModel = {
  create,
  getMentorBasedOnStatus,
  changeStatus,
  getDetails,
  updateDetails,
  requestUpdateDetails,
  getAllProfileRequest,
  requestForPersona,
  getRequestedPersonasList,
  addGmeetLink,
  getDashboardDetails,
  getBookingDetails,
  changeStatusForPersona,
  updateDigitalTwinDetails
}

export default MentorModel

async function create(body) {
  try {
    const { email } = body
    const checkMentor = await Mentor.findOne({ email })
    if (checkMentor) {
      throw new CustomError('You have already registered with our platform')
    }
    const createMentor = new Mentor(body)
    await createMentor.save()
    return
  } catch (error) {
    throw new CustomError({ error })
  }
}

async function getMentorBasedOnStatus(body) {
  try {
    const { status } = body
    if (status === 'REJECTED') {
      const rejectedMentors = await RejectMentor.find(body)
      return rejectedMentors
    }
    const mentors = await Mentor.find(body)
    return mentors
  } catch (error) {
    throw new CustomError({ error })
  }
}

async function changeStatus(body) {
  try {
    const { mentorId, status, mentorPrice, ranking, personaType, mentorCut } =
      body

    const mentorUpdate = await Mentor.findOne({ _id: mentorId })
    if (!mentorUpdate) {
      throw new CustomError('This mentor does not exist')
    }
    const { email, name } = mentorUpdate
    switch (status) {
      case 'REJECTED': {
        mentorUpdate.status = status
        const updatedMentor = await mentorUpdate.save()

        const obj = {...updatedMentor}

        const rejectedMentor = new RejectMentor(obj)
        await rejectedMentor.save()

        const mailTemplate = await MailTemplate.findOne({
          templateId: 'TEMPLATE_MENTOR_REJECT'
        })

        const { sourceMail, subject } = mailTemplate
        const locals = { name }
        const renderTemplateObject = {
          templateBody: { templateId: 'TEMPLATE_MENTOR_REJECT' },
          locals
        }

        const body = await MailTemplateModel.renderTemplate(renderTemplateObject)
        const unescapedBody = _unescapeString(body)
        await sendMail(sourceMail, email, subject, unescapedBody)
        await Mentor.deleteOne({ _id: mentorId })
        break;
      }
      case 'SCHEDULE': {
        if (!_checkType(personaType)) {
          throw new CustomError('Invalid personaType')
        }
        const type = personaType.toLowerCase()
        mentorUpdate.status = status
        
        mentorUpdate[type].ranking = ranking
        mentorUpdate[type].mentorPrice = mentorPrice
        mentorUpdate[type].accepted = true
        mentorUpdate[type].mentorCut = mentorCut

        if (personaType != null) {
          mentorUpdate.personas.push(personaType)
        }

        await _addLogosToUniversityAndCompany(mentorUpdate)
        await mentorUpdate.save()
        
        const mailTemplate = await MailTemplate.findOne({
          templateId: 'TEMPLATE_MENTOR_ACCEPT'
        })

        const { sourceMail, subject } = mailTemplate
        const renderTemplateObject = {
          templateBody: { templateId: 'TEMPLATE_MENTOR_ACCEPT' },
          locals: {
            mentorName: name,
            mentorType: _getPersonaString(personaType),
            mentorPrice: mentorCut
          }
        }

        const body = await MailTemplateModel.renderTemplate(renderTemplateObject)
        const unescapedBody = _unescapeString(body)
        await sendMail(sourceMail, email, subject, unescapedBody)
        break;
      }
      default: {
        throw new CustomError('Invalid statusType')
      }
    }
    return
  } catch (error) {
    throw new CustomError({ error })
  }
}

async function getDetails(body) {
  try {
    const { mentorId } = body
    const mentor = await Mentor.findOne({ _id: mentorId }).select('-password')
    if (!mentor) {
      throw new CustomError('Mentor does not exist')
    }
    return mentor
  } catch (error) {
    throw new CustomError({ error })
  }
}

async function requestForPersona(body) {
  try {
    const { mentorId, personaType, personaData } = body

    const mentor = await Mentor.findOne({ _id: mentorId })
    if (!mentor) {
      throw new CustomError('Mentor does not exists')
    }
    let matchType = personaType.toString()
    matchType = matchType.toUpperCase()

    switch (matchType) {
      case 'MASTERS': {
        mentor.masters = personaData
        await mentor.save()
        break
      }
      case 'JOB': {
        mentor.job = personaData
        await mentor.save()
        break
      }
      case 'ENTREPRENEURSHIP': {
        mentor.entrepreneurship = personaData
        await mentor.save()
        break
      }
      default: {
        throw new CustomError('Invalid personaType')
      }
    }
    return
  } catch (error) {
    throw new CustomError(error)
  }
}

async function getRequestedPersonasList() {
  try {
    // let data = await Mentor.aggregate([
    //     {
    //         $match: {
    //             $or: [
    //                 { 'masters.requested': true }, { 'job.requested': true }, { 'entrepreneurship.requested': true }
    //             ]
    //         }
    //     }
    // ])
    const job = await Mentor.find({
      'job.requested': true,
      'job.accepted': false,
      'personas.0': { $exists: true }
    })

    const entrepreneurship = await Mentor.find({
      'entrepreneurship.requested': true,
      'entrepreneurship.accepted': false,
      'personas.0': { $exists: true }
    })

    const masters = await Mentor.find({
      'masters.requested': true,
      'masters.accepted': false,
      'personas.0': { $exists: true }
    })

    return { job, entrepreneurship, masters }
  } catch (error) {
    throw new CustomError(error)
  }
}

async function requestUpdateDetails(body) {
  try {
    const { mentorId, data } = body
    const mentor = await Mentor.findOne({ _id: mentorId })
    if (!mentor) {
      throw new CustomError('Mentor does not exist')
    }
    const mentorToUpdate = new MentorRequestProfile({ mentorId })
    mentorToUpdate.newInfo = data
    await mentorToUpdate.save()
    return
  } catch (error) {
    console.log(error)
    throw new CustomError({ error })
  }
}

async function updateDigitalTwinDetails(body) {
  try {
    const { mentorId, data } = body
    const mentor = await Mentor.findOne({ _id: mentorId })
    if (!mentor) {
      throw new CustomError('Mentor does not exist')
    }
    for (const key in data) {
      if (key === 'certifications') {
        if (!('certifications' in mentor)) {
          mentor.certifications = {}
        }
        for (const eachCertification in data.certifications) {
          mentor.certifications[eachCertification] = data.certifications[eachCertification]
        }
      }
      else {
        mentor[key] = data[key]
      }
    }

    await mentor.save()
    return 'Successfully updated the digital twin details'
  }
  catch (error) {
    throw new CustomError({ error })
  }
}

async function updateDetails(body) {
  try {
    const { requestId, mentorId, data, profileStatus } = body

    const mentor = await Mentor.findOne({ _id: mentorId })
    const mentorToUpdate = await MentorRequestProfile.findOne({
      _id: requestId
    })
    if (!mentor && !mentorToUpdate) {
      throw new CustomError('Mentor does not exist')
    }

    console.log(mentorToUpdate)

    switch (profileStatus) {
      case 'ACCEPTED':
        for (const key in data) {
          if (key === 'educationInformation') {
            for (let i = 0; i < data.educationInformation.length; i++) {
              const edu = data.educationInformation[i]
              edu.universityLogo = await getUniversityLogo(edu.universityName)
            }
            mentor.educationInformation = data.educationInformation
          } else if (key === 'workExperience') {
            for (let i = 0; i < data.workExperience.length; i++) {
              const companyDetails = data.workExperience[i]
              const returnResult = await getCompanyLogo(
                companyDetails.companyName
              )
              companyDetails.companyLogo = returnResult
            }

            mentor.workExperience = data.workExperience
          } else if (key === 'masters') {
            for (const eachMasterKey in data.masters) {
              mentor.masters[eachMasterKey] = data.masters[eachMasterKey]
            }
          } else if (key === 'job') {
            for (const eachJobKey in data.job) {
              mentor.job[eachJobKey] = data.job[eachJobKey]
            }
          } else if (key === 'entrepreneurship') {
            for (const eachEntrepreneurshipKey in data.entrepreneurship) {
              mentor.entrepreneurship[eachEntrepreneurshipKey] =
                data.entrepreneurship[eachEntrepreneurshipKey]
            }
          } else if (key === 'certifications') {
            if (!('certifications' in mentor)) {
              mentor.certifications = {};
            }
            for (const eachCertification in data.certifications) {
              mentor.certifications[eachCertification] = data.certifications[eachCertification];
            }
          } else {
            mentor[key] = data[key]
          }
        }
        mentorToUpdate.profileStatus = profileStatus
        await mentor.save()
        await mentorToUpdate.save()
        return { mentor }

      case 'REJECTED':
        mentorToUpdate.profileStatus = profileStatus
        await mentorToUpdate.save()
        return

      default:
        throw new CustomError('Invalid Profile Status')
    }
  } catch (error) {
    throw new CustomError({ error })
  }
}

async function getAllProfileRequest(body) {
  try {
    const results = []
    const requests = await MentorRequestProfile.find({}).populate('mentorId')
    requests.map((item) => {
      if (item.profileStatus === 'PENDING') {
        results.push(item)
      }
    })
    return results
    // console.log(requests);
  } catch (error) {
    throw new CustomError({ error })
  }
}

async function addGmeetLink(body) {
  try {
    const { mentorId, meetLink } = body

    const mentor = await Mentor.findOne({ _id: mentorId })
    if (!mentor) {
      throw new CustomError('Mentor does not exist')
    }
    mentor.meetLink = meetLink
    await mentor.save()
    return 'Successfully updated the mentor meet link'
  } catch (error) {
    throw new CustomError({ error })
  }
}

async function getDashboardDetails(body) {
  try {
    const { mentorId, currentPersona } = body
    const mentor = await Mentor.findOne({ _id: mentorId })
    if (!mentor) {
      throw new CustomError('Mentor does not exist')
    }
    const gmeetLink = mentor.meetLink
    const allBookings = await _Booking
      .find({
        mentorId,
        personaType: currentPersona,
        paymentStatus: 'ACCEPT'
      })
      .lean()

    let totalAmountEarned = 0
    for (let i = 0; i < allBookings.length; i++) {
      totalAmountEarned += allBookings[i].mentorCut
    }
    return {
      gmeetLink,
      totalAmountEarned,
      noOfBookings: allBookings.length
    }
  } catch (error) {
    throw new CustomError({ error })
  }
}

async function getBookingDetails(body) {
  try {
    const { mentorId, currentPersona } = body

    if (!_checkType(currentPersona)) {
      throw new CustomError('Invalid personaType')
    }

    const mentor = await Mentor.findOne({ _id: mentorId }).lean()
    if (!mentor) {
      throw new CustomError('Mentor does not exist')
    }
    const gmeetLink = mentor.meetLink

    let allBookings = await _Booking
      .find({
        mentorId,
        personaType: currentPersona
      })
      .select('-razorpayOrderId')
      .populate({
        path: 'userId',
        select: 'userName userEmail userContactNumber'
      })
      .lean()

    const currentDate = new Date()

    allBookings = allBookings.filter(
      (booking) => booking.paymentStatus === 'ACCEPT'
    )

    for (let i = 0; i < allBookings.length; i++) {
      const obj = allBookings[i]
      obj.gmeetLink = gmeetLink
      const startTime = obj.meetingTimings[0].startTime
      const date = _getStringFromDate(obj.meetingDate, startTime)
      if (date.getTime() < currentDate.getTime()) {
        obj.status = 'COMPLETE'
      } else {
        obj.status = 'UPCOMING'
      }
      delete obj.paymentStatus
    }

    return allBookings
  } catch (error) {
    throw new CustomError({ error })
  }
}

async function changeStatusForPersona(body) {
  try {
    const { mentorId, data, personaType } = body
    const mentor = await Mentor.findOne({ _id: mentorId })

    const { name, email } = mentor

    if (!mentor) {
      throw new CustomError('Mentor does not exist')
    }
    const { accepted, ranking, mentorPrice, mentorCut } = data

    if (!_checkType(personaType)) {
      throw new CustomError('Invalid personaType')
    }
    const type = personaType.toLowerCase()
    mentor[type].requested = false
    mentor[type].accepted = accepted
    mentor[type].ranking = ranking
    mentor[type].mentorPrice = mentorPrice
    mentor[type].mentorCut = mentorCut

    if (personaType != null) {
      mentor.personas.push(personaType)
    }
    if (accepted) {
      const mailTemplate = await MailTemplate.findOne({
        templateId: 'TEMPLATE_MENTOR_ACCEPT'
      })

      const { sourceMail, subject } = mailTemplate

      const renderTemplateObject = {
        templateBody: { templateId: 'TEMPLATE_MENTOR_ACCEPT' },
        locals: {
          mentorName: name,
          mentorType: _getPersonaString(personaType),
          mentorPrice: mentorCut
        }
      }
      const body = await MailTemplateModel.renderTemplate(renderTemplateObject)
      const unescapedBody = _unescapeString(body)
      await sendMail(sourceMail, email, subject, unescapedBody)
    } else {
      const mailTemplate = await MailTemplate.findOne({
        templateId: 'TEMPLATE_MENTOR_REJECT'
      })

      const { sourceMail, subject } = mailTemplate
      const renderTemplateObject = {
        templateBody: { templateId: 'TEMPLATE_MENTOR_REJECT' },
        locals: { name }
      }
      const body = await MailTemplateModel.renderTemplate(renderTemplateObject)
      const unescapedBody = _unescapeString(body)
      await sendMail(sourceMail, email, subject, unescapedBody)
    }
    await mentor.save()
    return
  } catch (error) {
    throw new CustomError(error)
  }
}

async function _addLogosToUniversityAndCompany(mentor) {
  for (let i = 0; i < mentor.educationInformation.length; i++) {
    const edu = mentor.educationInformation[i]
    edu.universityLogo = await getUniversityLogo(edu.universityName)
  }

  for (let i = 0; i < mentor.workExperience.length; i++) {
    const companyDetails = mentor.workExperience[i]
    const returnResult = await getCompanyLogo(companyDetails.companyName)
    companyDetails.companyLogo = returnResult
  }
}

function _getPersonaString(personaType) {
  return personaType.substr(0, 1) + personaType.substr(1).toLowerCase()
}

function _unescapeString(body) {
  return unescapeJs(body)
}

function _getStringFromDate(date, time) {
  const splitDate = date.split('-')
  const splitTime = time.split(':')
  return new Date(
    splitDate[0],
    splitDate[1] - 1,
    splitDate[2],
    splitTime[0],
    splitTime[1]
  )
}

function _checkType(personaType) {
  const personaTypes = ['MASTERS', 'JOB', 'ENTREPRENEURSHIP']
  return personaTypes.includes(personaType)
}
