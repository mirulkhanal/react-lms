const router = require('express').Router()
const db = require('../../models/db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config()

// login as user
router.post('/login', async (req, res) => {
  const username = req.body.username
  const password = req.body.password

  db.query(
    'SELECT * FROM users WHERE username = ?',
    [username],
    (err, users) => {
      if (err) {
        res.status(401).send({ error: err })
      }
      if (users && users.length > 0) {
        // comparing the hash stored in db and the password provided by the client
        bcrypt.compare(password, users[0].password, (err, match) => {
          if (err) {
            return err
          }
          if (match) {
            // if passwords match then sign a jwt token for the user
            const token = jwt.sign(
              {
                username: users[0].username,
                uuid: users[0].uuid,
                type: users[0].type,
              },
              process.env.JWT_SECRET
            )
            // send a coookie with the response so browser can store credentials in an http coookie
            res
              .cookie('token', token, {
                maxAge: 1000 * 60 * 60,
                httpOnly: true,
              })
              .send({
                message: 'Successfully Logged in',
              })
          } else {
            res.status(401).send({
              error: 'Authorization failed, provide correct info',
            })
          }
        })
      } else {
        res.status(401).send({ error: 'Username or password is incorrect' })
      }
    }
  )
})
router.get('/verify', (req, res) => {
  const token = req.cookies.token
  // const type = req.user.type
  if (!token) return res.send({ verified: false })
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET)
    return res.send({
      verified: true,
      type: user.type,
    })
  } catch (err) {
    return res.send({ verified: false })
  }
})

router.get('/logout', (req, res) => {
  res
    .status(200)
    .cookie('token', '', {
      httpOnly: true,
      maxAge: new Date(0),
    })
    .send()
})
module.exports = router
