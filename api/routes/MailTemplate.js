'use strict'

import Express from 'express'
import { MailTemplateController } from '../controllers'
import { expressUtils } from '../helpers'

const MailTemplateRouter = new Express.Router()
const {
  createTemplate,
  getTemplate
} = MailTemplateController

const { reqHandler, resHandler } = expressUtils
const { extractHeaders, routeSanity, asyncWrapper } = reqHandler
const { setHeaders } = resHandler

MailTemplateRouter.use(extractHeaders)

MailTemplateRouter.post('/create', routeSanity, asyncWrapper(createTemplate))
MailTemplateRouter.post('/find', routeSanity, asyncWrapper(getTemplate))

MailTemplateRouter.use(setHeaders)

export default MailTemplateRouter
