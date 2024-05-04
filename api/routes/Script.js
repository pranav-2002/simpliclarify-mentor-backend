'use strict'

import Express from 'express'
import { expressUtils } from '../helpers'
import ScriptController from './../controllers/Script';


const ScriptRouter = new Express.Router()

const { scheduleFix } = ScriptController

const { reqHandler, resHandler } = expressUtils
const { extractHeaders, routeSanity, asyncWrapper } = reqHandler
const { setHeaders } = resHandler

ScriptRouter.use(extractHeaders)
ScriptRouter.post('/schedule-fix', routeSanity, asyncWrapper(scheduleFix))
ScriptRouter.use(setHeaders)

export default ScriptRouter