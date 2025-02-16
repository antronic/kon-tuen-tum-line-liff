import { Router } from 'express'
import TeslaRouter from './tesla.routes.mjs'
import {verifyLineToken} from '../middleware/auth.middleware.mjs'
import {connect} from '../config/mongodb.mjs'

const ApiRouter = Router()

ApiRouter.use(verifyLineToken)
ApiRouter.use('/tesla', TeslaRouter)

ApiRouter.get('/', async (req, res) => {
  const db = await connect()
  const collection = db.collection('people')

  const people = await collection.find({}).toArray()

  res.json({people})
})

export default ApiRouter