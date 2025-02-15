import { Router } from 'express'
import {getProfile} from '../services/line.service'

const router = Router()

router.get('/profile', async (req, res) => {
  const { accessToken } = req.query
  const response = await getProfile(accessToken)
  res.json(response)
})

export default router