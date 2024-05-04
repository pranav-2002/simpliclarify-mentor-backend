'use strict'
import { SERVER_CONFIG, MONGO_CONFIG } from './config'
import { logger } from './api/helpers'

const { PORT } = SERVER_CONFIG

const startServer = async (app) => {
  try {
    // connect to mongodb
    await MONGO_CONFIG.mongoConnect()
    logger.info('[Info] MongoDB Connected')
    const response = await app.listen(PORT)
    logger.info('[Info] Server Started Successfully')
  } catch (error) {
    process.exit(1)
  }
}

export default startServer
