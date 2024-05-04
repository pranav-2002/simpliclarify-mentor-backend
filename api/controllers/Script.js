'use strict'
import FixModel from './../scripts/scheduleFix'
import { ResponseBody } from '../helpers'

const ScriptController = {
    scheduleFix
}

export default ScriptController


async function scheduleFix(request, response, next) {
    const data = await FixModel.scheduleFix()
    const responseBody = new ResponseBody(200, 'Schema successfully set for mentor', data)
    response.body = responseBody
    next()
}