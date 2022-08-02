import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

import connectDB from './config/db.js'
import {userRoutes} from './routes/userRoutes.js'
import {ticketRoutes} from './routes/ticketRoutes.js'
import { errorHandler } from './middleware/errorMiddleware.js'

connectDB()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Routes
app.use('/api/users', userRoutes)
app.use('/api/tickets', ticketRoutes)

// Serve Frontend
if (process.env.NODE_ENV === 'production') {
  // Set build folder as static
  app.use(express.static(path.join(__dirname, '../support-frontend/build')))

  // FIX: below code fixes app crashing on refresh in deployment
  app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, '../support-frontend/build/index.html'))
  })
} else {
  app.get('/', (req, res) => {
    res.status(200).json({ message: "welcome to the developer's world!" })
  })
}

app.use(errorHandler)


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})