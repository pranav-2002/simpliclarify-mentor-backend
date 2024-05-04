'use strict'

import { ResponseBody } from '../helpers'
import { MentorModel } from '../models'

const MentorController = {
  create,
  getMentorBasedOnStatus,
  changeStatus,
  getDetails,
  updateDigitalTwinDetails,
  updateDetails,
  requestForUpdateDetails,
  getAllRequests,
  requestForPersona,
  changeStatusForPersona,
  getRequestedPersonasList,
  addGmeetLink,
  getDashboardDetails,
  getBookingDetails
}

export default MentorController

async function create(request, response, next) {
  const { body } = request
  const data = await MentorModel.create(body)
  const responseBody = new ResponseBody(
    201,
    'Mentor created successfully.',
    data
  )
  response.body = responseBody
  next()
}

async function getMentorBasedOnStatus(request, response, next) {
  const { body } = request
  const data = await MentorModel.getMentorBasedOnStatus(body)
  const responseBody = new ResponseBody(
    200,
    'Fetched mentors based on status',
    data
  )
  response.body = responseBody
  next()
}

async function changeStatus(request, response, next) {
  const { body } = request
  const data = await MentorModel.changeStatus(body)
  const responseBody = new ResponseBody(
    201,
    'Changed mentor status successfully',
    data
  )
  response.body = responseBody
  next()
}

async function getDetails(request, response, next) {
  const { body } = request
  const data = await MentorModel.getDetails(body)
  const responseBody = new ResponseBody(
    200,
    'Got the mentor details successfully',
    data
  )
  response.body = responseBody
  next()
}

async function requestForUpdateDetails(request, response, next) {
  const { body } = request
  const data = await MentorModel.requestUpdateDetails(body)
  const responseBody = new ResponseBody(
    200,
    'Successfully requested for mentor details updation',
    data
  )
  response.body = responseBody
  next()
}

async function updateDigitalTwinDetails(request, response, next) {
  const { body } = request
  const data = await MentorModel.updateDigitalTwinDetails(body)
  const responseBody = new ResponseBody(
    200,
    'Successfully updated digital twin details.',
    data
  )
  response.body = responseBody
  next()
}

async function updateDetails(request, response, next) {
  const { body } = request
  const data = await MentorModel.updateDetails(body)
  const responseBody = new ResponseBody(
    200,
    'Successfully updated mentor details.',
    data
  )
  response.body = responseBody
  next()
}

async function getAllRequests(request, response, next) {
  const { body } = request
  const data = await MentorModel.getAllProfileRequest(body)
  const responseBody = new ResponseBody(200, 'Got all profile requests.', data)
  response.body = responseBody
  next()
}

async function requestForPersona(request, response, next) {
  const { body } = request
  const data = await MentorModel.requestForPersona(body)
  const responseBody = new ResponseBody(
    200,
    'Your request has been received successfully',
    data
  )
  response.body = responseBody
  next()
}

async function changeStatusForPersona(request, response, next) {
  const { body } = request
  const data = await MentorModel.changeStatusForPersona(body)
  const responseBody = new ResponseBody(
    200,
    'Updated mentor details successfully',
    data
  )
  response.body = responseBody
  next()
}

async function getRequestedPersonasList(request, response, next) {
  const data = await MentorModel.getRequestedPersonasList()
  const responseBody = new ResponseBody(
    200,
    'Fetched persona list successfully',
    data
  )
  response.body = responseBody
  next()
}

async function addGmeetLink(request, response, next) {
  const { body } = request
  const data = await MentorModel.addGmeetLink(body)
  const responseBody = new ResponseBody(
    200,
    'Gmeet link has been successfully added',
    data
  )
  response.body = responseBody
  next()
}

async function getDashboardDetails(request, response, next) {
  const { body } = request
  const data = await MentorModel.getDashboardDetails(body)
  const responseBody = new ResponseBody(
    200,
    'Got the mentor dashboard details successfully',
    data
  )
  response.body = responseBody
  next()
}

async function getBookingDetails(request, response, next) {
  const { body } = request
  const data = await MentorModel.getBookingDetails(body)
  const responseBody = new ResponseBody(
    200,
    'Got the mentor bookings successfully',
    data
  )
  response.body = responseBody
  next()
}
