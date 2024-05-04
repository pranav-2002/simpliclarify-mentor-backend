'use strict'

import Express from 'express'
import { expressUtils } from '../helpers'
import { PersonaController } from '../controllers'
const { reqHandler, resHandler } = expressUtils
const { extractHeaders, routeSanity, asyncWrapper } = reqHandler
const { setHeaders } = resHandler

const PersonaRouter = new Express.Router()

const { createPersona, getPersona } = PersonaController

PersonaRouter.use(extractHeaders)

PersonaRouter.post('/create', routeSanity, asyncWrapper(createPersona))
PersonaRouter.get('/', routeSanity, asyncWrapper(getPersona))

PersonaRouter.use(setHeaders)

export default PersonaRouter
