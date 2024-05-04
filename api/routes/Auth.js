'use strict'

import Express from 'express'
import { expressUtils } from '../helpers'
import { AuthController } from '../controllers'
const { reqHandler, resHandler } = expressUtils
const { extractHeaders, routeSanity, asyncWrapper } = reqHandler
const { setHeaders } = resHandler

const AuthRouter = new Express.Router()

const { login, forgotPassword, updatePassword } = AuthController

AuthRouter.use(extractHeaders)

AuthRouter.post('/login', routeSanity, asyncWrapper(login))
AuthRouter.post('/forgot-password', routeSanity, asyncWrapper(forgotPassword))
AuthRouter.patch('/change-password', routeSanity, asyncWrapper(updatePassword))

AuthRouter.use(setHeaders)

export default AuthRouter
