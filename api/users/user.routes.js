import { Router } from 'express'
import { getUsers, postUser } from './user.services.js'

const usersRouter = Router()

usersRouter
  .get('/', async (req, res) => {
    try {
      res.json(await getUsers()).status(200)
    } catch (err) {
      res.json({ error: err.message }).status(400)
    }
  })
  .post('/', async (req, res) => {
    try {
      const userInfo = req.body
      await postUser(userInfo)
      res.json({ message: 'Usuario creado exitosamente' }).status(201)
    } catch (err) {
      res.json({ error: err.message }).status(400)
    }
  })

export default usersRouter