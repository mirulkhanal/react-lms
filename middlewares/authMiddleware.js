// importing libs
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config()

// importing constants folder with user acc types
const { ACCOUNT_TYPE } = require('../constants/constants')

// verifies if the user is logged in by checking if the req object still has a cookie
const verifyLogin = (req, res, next) => {
  const token = req.cookies.token
  if (!token)
    return res.status(400).send({
      error: 'Invalid token or expired',
    })
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET)
    if (!user)
      return res.status(401).send({ error: 'Unauthorized access token' })
    req.user = user
    next()
  } catch (err) {
    return res.status(401).send({ error: 'Unauthorized access token' })
  }
}
// verify the account type from the req.user data provided in the previous middleware in case the user is logged in
const verifyAdmin = (req, res, next) => {
  if (!req.user)
    return res.status(400).send({
      error: 'Invalid token or expired',
    })
  if (req.user.type !== ACCOUNT_TYPE.ADMIN)
    return res.status(401).send({ error: 'Unauthorized access' })

  next()
}
const verifyStudent = (req, res, next) => {
  if (!req.user)
    return res.status(400).send({
      error: 'Invalid token or expired',
    })
  if (req.user.type !== ACCOUNT_TYPE.STUDENT)
    return res.status(401).send({ error: 'Unauthorized access' })

  next()
}
module.exports = { verifyLogin, verifyAdmin, verifyStudent }
