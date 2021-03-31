const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

// routes
const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')
const courseRoutes = require('./routes/courseRoutes')
const studentRoutes = require('./routes/studentRoutes')
const noticeRoutes = require('./routes/noticeRoutes')
// custom middlewares import
const {
  verifyLogin,
  verifyAdmin,
  verifyStudent,
} = require('./middlewares/authMiddleware')

// express app initialization
const app = express()

// middlewares
app.use(express.json())
app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
  })
)
app.use(cookieParser())

app.use('/auth', authRoutes)
app.use('/users', verifyLogin, verifyAdmin, userRoutes)
app.use('/courses', verifyLogin, verifyAdmin, courseRoutes)
app.use('/student', verifyLogin, verifyAdmin, studentRoutes)
app.use('/notice', verifyLogin, verifyAdmin, noticeRoutes)

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
