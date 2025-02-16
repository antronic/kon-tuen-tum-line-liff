import { Router } from 'express'
import {getTeslaStates} from '../services/ha.service.mjs'

const TeslaRouter = Router()

TeslaRouter.get('/states', async (req, res) => {
  const states = await getTeslaStates()

  res.json({ states })
})

export default TeslaRouter