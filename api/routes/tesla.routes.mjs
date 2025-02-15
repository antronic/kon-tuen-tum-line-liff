import { Router } from 'express'

const TeslaRouter = Router()

TeslaRouter.get('/profile', async (req, res) => {
  res.json({ message: 'Tesla profile' })
})

export default TeslaRouter