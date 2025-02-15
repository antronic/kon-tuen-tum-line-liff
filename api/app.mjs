import express from 'express'
import cors from 'cors'

// import routes
import ApiRouter from './routes/api.routes.mjs'

const app = express()
const PORT = process.env.PORT || 9000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(ApiRouter)

app.get('/', (req, res) => {
  res.send('Hello World')
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

