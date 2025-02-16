import { Router } from 'express'

const UserRouter = Router()

UserRouter.get('/', (req, res) => {
  res.send('User Route')
})

export default UserRouter