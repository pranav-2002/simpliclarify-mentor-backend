'use strict'

import { CustomError } from '../helpers'
import {
  getUniversitiesInCountry,
  getCitiesInCountry,
  getDesignation,
  getCompanyLogo
} from '../helpers/mentorExtraInfo'

import Mentor from '../schemas/Mentor'
import UniversityList from '../schemas/UniversityList'

const MiscModel = {
  getUniversitiesAndCities,
  getDesignationList,
  runScript,
  saveAllUniversities
}

export default MiscModel

async function getUniversitiesAndCities (body) {
  try {
    const { countryCode } = body
    const universities = await getUniversitiesInCountry(countryCode)
    const cities = await getCitiesInCountry(countryCode)
    return {
      universities,
      cities
    }
  } catch (e) {
    throw new CustomError(e)
  }
}

async function getDesignationList () {
  try {
    const designations = await getDesignation()
    return designations
  } catch (e) {
    throw new CustomError(e)
  }
}

async function runScript () {
  try {
    const mentors = await Mentor.find()
    for (let i = 0; i < mentors.length; i++) {
      console.log(mentors[i]._id)
      for (let j = 0; j < mentors[i].workExperience.length; j++) {
        const companyDetails = mentors[i].workExperience[j]
        const returnResult = await getCompanyLogo(companyDetails.companyName)
        companyDetails.companyLogo = returnResult
      }

      await mentors[i].save()
    }
  } catch (e) {
    throw new CustomError(e)
  }
}

async function saveAllUniversities (body) {
  try {
    const res = await UniversityList.create(body)
    return res
  } catch (e) {
    throw new CustomError(e)
  }
}
