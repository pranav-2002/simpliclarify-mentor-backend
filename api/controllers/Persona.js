'use strict'

import { ResponseBody } from '../helpers'
import { PersonaModel } from '../models'

const PersonaController = {
  createPersona,
  getPersona
}

export default PersonaController

async function createPersona (request, response, next) {
  const { body } = request
  const data = await PersonaModel.createPersona(body)
  const responseBody = new ResponseBody(201, 'Persona created successfully', data)
  response.body = responseBody
  next()
}

async function getPersona (request, response, next) {
  const data = await PersonaModel.getPersona()
  const responseBody = new ResponseBody(200, 'Fetched successfully', data)
  response.body = responseBody
  next()
}
