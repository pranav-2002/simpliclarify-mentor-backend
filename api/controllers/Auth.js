'use strict'

import { AuthModel } from '../models'
import { ResponseBody } from '../helpers'

const AuthController = {
  login,
  forgotPassword,
  updatePassword
}

export default AuthController

async function login (request, response, next) {
  const { body } = request
  const data = await AuthModel.login(body)
  const responseBody = new ResponseBody(201, 'Mentor logged in successfully.', data)
  response.body = responseBody
  next()
}

async function forgotPassword (request, response, next) {
  const { body } = request
  const data = await AuthModel.forgotPassword(body)
  const responseBody = new ResponseBody(200, 'New password has been sent to your registered Email address.', data)
  response.body = responseBody
  next()
}

async function updatePassword (request, response, next) {
  const { body } = request
  const data = await AuthModel.updatePassword(body)
  const responseBody = new ResponseBody(200, 'Password updated successfully.', data)
  response.body = responseBody
  next()
}
