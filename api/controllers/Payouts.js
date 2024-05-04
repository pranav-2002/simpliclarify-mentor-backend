'use strict'

import { Payouts } from '../models'
import { ResponseBody } from '../helpers'

const PayoutsController = {
  payoutBookingList,
  capturePayout,
  fetchPayouts
}
export default PayoutsController

async function payoutBookingList (request, response, next) {
  const { body } = request
  const data = await Payouts.payoutBookingList(body)
  const responseBody = new ResponseBody(200, 'Fetched booking successfully.', data)
  response.body = responseBody
  next()
}

async function capturePayout (request, response, next) {
  const { body } = request
  const data = await Payouts.capturePayout(body)
  const responseBody = new ResponseBody(201, 'Captured payment', data)
  response.body = responseBody
  next()
}

async function fetchPayouts (request, response, next) {
  const data = await Payouts.fetchPayouts()
  const responseBody = new ResponseBody(200, 'Fetched payouts', data)
  response.body = responseBody
  next()
}
