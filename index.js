import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import usersRouter from './api/users/user.routes.js'
import swaggerConfig from './swaggerConfig.json' assert { type: 'json' }
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'
const server = express()

dotenv.config()
const PORT = process.env.PORT
const openApiSpecification = swaggerJSDoc(swaggerConfig)
server
  .use(cors())
  .use(express.json())
  .use('/', swaggerUI.serve)
  .get('/', swaggerUI.setup(openApiSpecification))
  .use('/users', usersRouter)
  .listen(PORT, () => {
    console.log(`Servidor escuchando en puerto: ${PORT}`)
  })  