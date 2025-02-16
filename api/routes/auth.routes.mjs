import { Router } from 'express'
import {verifyAccessToken} from '../services/line.service.mjs'

const AuthRouter = Router()

AuthRouter.post('/login', verifyAccessToken, (req, res) => {
  res.json({ jwt: req.jwt })
})