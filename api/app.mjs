import express from 'express'
import cors from 'cors'

// import routes
import ApiRouter from './routes/api.routes.mjs'
import {connect} from './config/mongodb.mjs'


const app = express()
const PORT = process.env.PORT || 9000

await connect()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', ApiRouter)

app.get('/', (req, res) => {
  res.send('Hello World')
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

