const router = require('express').Router()
const db = require('../models/db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// login as user
router.post('/', async (req, res) => {
  const username = req.body.username
  const password = req.body.password

  db.query(
    'SELECT * FROM users WHERE username = ?',
    [username],
    (err, users) => {
      if (err) {
        res.status(401).send({ error: err })
      }
      if (users.length > 0) {
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
                name: users[0].name,
                email: users[0].email,
                type: users[0].type,
              },
              'secretcode',
              // TODO: use env file fo safekeeping passwords
              {
                expiresIn: '2h',
              }
            )
            res.status(200).send({
              message: 'Successfully logged in',
              token,
            })
          } else {
            res.status(401).send({
              error: 'Authorization failed, provide correct info',
            })
          }
        })
      } else {
        res.status(401).send({ error: 'Username not found' })
      }
    }
  )
})
module.exports = router
