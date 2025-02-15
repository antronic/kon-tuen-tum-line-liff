import { Router } from 'express'
import TeslaRouter from './tesla.routes.mjs'
import {verifyLineToken} from '../middleware/auth.middleware.mjs'

const ApiRouter = Router()

ApiRouter.use(verifyLineToken)
ApiRouter.use('/api/tesla', TeslaRouter)

export default ApiRouter