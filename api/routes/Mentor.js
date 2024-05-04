'use strict'

import Express from 'express'
import { expressUtils } from '../helpers'
import { MentorController } from '../controllers'
const { reqHandler, resHandler } = expressUtils
const { extractHeaders, routeSanity, asyncWrapper } = reqHandler
const { setHeaders } = resHandler

const MentorRouter = new Express.Router()

const {
  create,
  getMentorBasedOnStatus,
  changeStatus,
  getDetails,
  requestForUpdateDetails,
  updateDigitalTwinDetails,
  updateDetails,
  getAllRequests,
  requestForPersona,
  getRequestedPersonasList,
  addGmeetLink,
  getDashboardDetails,
  getBookingDetails,
  changeStatusForPersona
} = MentorController

MentorRouter.use(extractHeaders)

MentorRouter.post('/create', routeSanity, asyncWrapper(create))
MentorRouter.post(
  '/list/orderby/status',
  routeSanity,
  asyncWrapper(getMentorBasedOnStatus)
)
MentorRouter.put('/update/status', routeSanity, asyncWrapper(changeStatus))
MentorRouter.post('/get/details', routeSanity, asyncWrapper(getDetails))

MentorRouter.post('/update/digitaltwin/details', routeSanity, asyncWrapper(updateDigitalTwinDetails))
MentorRouter.post(
  '/request/update/details',
  routeSanity,
  asyncWrapper(requestForUpdateDetails)
)
MentorRouter.post(
  '/admin/update/details',
  routeSanity,
  asyncWrapper(updateDetails)
)
MentorRouter.post(
  '/admin/get/profile/requests',
  routeSanity,
  asyncWrapper(getAllRequests)
)
MentorRouter.post(
  '/request/persona',
  routeSanity,
  asyncWrapper(requestForPersona)
)
MentorRouter.get(
  '/get/personas/list',
  routeSanity,
  asyncWrapper(getRequestedPersonasList)
)
MentorRouter.post('/add/gmeet-link', routeSanity, asyncWrapper(addGmeetLink))
MentorRouter.post(
  '/get/dashboard',
  routeSanity,
  asyncWrapper(getDashboardDetails)
)
MentorRouter.post(
  '/get/bookings',
  routeSanity,
  asyncWrapper(getBookingDetails)
)
MentorRouter.patch(
  '/update/persona-status',
  routeSanity,
  asyncWrapper(changeStatusForPersona)
)

MentorRouter.use(setHeaders)

export default MentorRouter
