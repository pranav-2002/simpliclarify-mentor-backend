'use strict'

import { ResponseBody } from '../helpers'
import { MailTemplateModel } from '../models'

const MailTemplateController = {
  createTemplate,
  getTemplate
}
export default MailTemplateController

async function createTemplate(request, response, next) {
  const { body } = request
  const data = await MailTemplateModel.createTemplate(body)
  const responseBody = new ResponseBody(201, 'Template created successfully', data)
  response.body = responseBody
  next()
}

async function getTemplate(request, response, next) {
  const { body } = request
  const data = await MailTemplateModel.getTemplate(body)
  const responseBody = new ResponseBody(200, 'Template fetched', data)
  response.body = responseBody
  next()
}
