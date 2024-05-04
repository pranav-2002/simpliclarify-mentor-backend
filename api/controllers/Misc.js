'use strict'

import { MiscModel } from '../models'
import { ResponseBody } from '../helpers'

const MiscController = {
  getUniversitiesAndCities,
  getDesignation,
  runScript,
  saveAllUniversities
}

export default MiscController

async function getUniversitiesAndCities (request, response, next) {
  const { body } = request
  const data = await MiscModel.getUniversitiesAndCities(body)
  const responseBody = new ResponseBody(
    200,
    'Got the list of universities and cities in the given country',
    data
  )
  response.body = responseBody
  next()
}

async function getDesignation (request, response, next) {
  const data = await MiscModel.getDesignationList()
  const responseBody = new ResponseBody(
    200,
    'Got the list of designations',
    data
  )
  response.body = responseBody
  next()
}

async function runScript (request, response, next) {
  const data = await MiscModel.runScript()
  const responseBody = new ResponseBody(200, 'Ran the script', data)
  response.body = responseBody
  next()
}

async function saveAllUniversities (request, response, next) {
  const { body } = request
  const data = await MiscModel.saveAllUniversities(body)
  const responseBody = new ResponseBody(200, 'Saved the universities', data)
  response.body = responseBody
  next()
}
