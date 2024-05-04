'use strict'

import Express from 'express'
import { expressUtils } from '../helpers'
import { PayoutsController } from '../controllers'

const { reqHandler, resHandler } = expressUtils
const { extractHeaders, routeSanity, asyncWrapper } = reqHandler
const { setHeaders } = resHandler

const PayoutsRouter = new Express.Router()

const { payoutBookingList, capturePayout, fetchPayouts } = PayoutsController

PayoutsRouter.use(extractHeaders)

PayoutsRouter.post('/booking/list', routeSanity, asyncWrapper(payoutBookingList))
PayoutsRouter.post('/capture/payments', routeSanity, asyncWrapper(capturePayout))
PayoutsRouter.post('/list', routeSanity, asyncWrapper(fetchPayouts))

PayoutsRouter.use(setHeaders)

export default PayoutsRouter
