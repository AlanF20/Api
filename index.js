import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import usersRouter from './api/users/user.routes.js'
const server = express()

dotenv.config()
const PORT = process.env.PORT
server
  .use(cors())
  .use(express.json())
  .use('/users', usersRouter)
  .listen(PORT, () => {
    console.log(`Servidor escuchando en puerto: ${PORT}`)
  })  