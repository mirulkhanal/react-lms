const express = require('express')
const cors = require('cors')

// const bcrypt = require('bcrypt')
// const db = require('./models/db')

// routes
const loginRoutes = require('./routes/loginRoutes')
const userRoutes = require('./routes/userRoutes')
const courseRoutes = require('./routes/courseRoutes')

// express app initialization
const app = express()

// middlewares
app.use(express.json())
app.use(cors())

app.use('/login', loginRoutes)
app.use('/users', userRoutes)
app.use('/courses', courseRoutes)

// 404 error handling
app.use((req, res) => {
  res.sendFile('./404.html', { root: __dirname })
})
const PORT = process.env.PORT || 5000
app.listen(PORT, (err) => {
  if (err) {
    throw err
  }
  console.log(`[Server] started at port ${PORT}`)
})
