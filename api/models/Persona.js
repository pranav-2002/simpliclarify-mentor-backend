'use strict'

import { CustomError, logger } from '../helpers'
import Persona from '../schemas/Persona'

const PersonaModel = {
  createPersona,
  getPersona
}
export default PersonaModel

async function createPersona (body) {
  try {
    const persona = new Persona(body)
    const created = await persona.save()
    return created
  } catch (error) {
    logger.info(error)
    throw new CustomError({ error })
  }
}

async function getPersona () {
  try {
    const persona = await Persona.find({})
    return persona
  } catch (error) {
    logger.info(error)
    throw new CustomError({ error })
  }
}
