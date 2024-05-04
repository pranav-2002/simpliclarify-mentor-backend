'use strict'

import { expressUtils, ResponseBody } from '../helpers'

import HealthRouter from './Health'
import PersonaRouter from './Persona'
import MentorRouter from './Mentor'
import AuthRouter from './Auth'
import ScheduleRouter from './Schedule'
import MailTemplateRouter from './MailTemplate'
import MiscRouter from "./Misc"
import PayoutRouter from "./Payouts"
import ScriptRouter from "./Script"

const { resHandler } = expressUtils
const { handleResponse } = resHandler

const Routes = [
  { path: "/health", router: HealthRouter },
  { path: "/mentor", router: MentorRouter },
  { path: "/persona", router: PersonaRouter },
  { path: "/auth", router: AuthRouter },
  { path: "/schedule", router: ScheduleRouter },
  { path: "/mailTemplate", router: MailTemplateRouter },
  { path: "/misc", router: MiscRouter },
  { path: "/payout", router: PayoutRouter },
  { path: "/script", router: ScriptRouter }
]

Routes.init = (app) => {
  if (!app || !app.use) {
    console.error(
      '[Error] Route Initialization Failed: app / app.use is undefined '
    )
    return process.exit(1)
  }

  Routes.forEach((route) => app.use(route.path, route.router))

  // Final Route Pipeline
  app.use('*', (request, response, next) => {
    if (!request.isMatched) {
      const { method, originalUrl } = request
      const message = `Cannot ${method} ${originalUrl}`
      const error = new ResponseBody(404, message)
      response.body = error
    }

    return handleResponse(request, response, next)
  })

  // Route Error Handler
  app.use((error, request, response, next) => {
    if (!error) {
      return process.nextTick(next)
    }
    console.warn(`[WARN] middleware ${error}`)
    const { statusCode = 500, message } = error
    let responseBody
    if (error.constructor.name === 'ResponseBody') {
      responseBody = error
    } else {
      responseBody = new ResponseBody(statusCode, message, error)
    }
    response.body = responseBody
    return handleResponse(request, response, next)
  })
}
export default Routes
