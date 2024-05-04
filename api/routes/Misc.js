'use strict'

import Express from 'express'
import { expressUtils } from '../helpers'
import { MiscController } from '../controllers'
const { reqHandler, resHandler } = expressUtils
const { extractHeaders, routeSanity, asyncWrapper } = reqHandler
const { setHeaders } = resHandler

const MiscRouter = new Express.Router()

const {
  getUniversitiesAndCities,
  getDesignation,
  runScript,
  saveAllUniversities
} = MiscController

MiscRouter.use(extractHeaders)

MiscRouter.post(
  '/get/universities-and-cities',
  routeSanity,
  asyncWrapper(getUniversitiesAndCities)
)

MiscRouter.get('/get/designations', routeSanity, asyncWrapper(getDesignation))

MiscRouter.post('/run/script', routeSanity, asyncWrapper(runScript))

MiscRouter.post(
  '/save/universities',
  routeSanity,
  asyncWrapper(saveAllUniversities)
)

MiscRouter.use(setHeaders)

export default MiscRouter
