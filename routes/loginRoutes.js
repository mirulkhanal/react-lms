const router = require('express').Router()
const db = require('../models/db')
const bcrypt = require('bcrypt')

// login as user
router.post('/', async (req, res) => {
  const username = req.body.username
  const password = req.body.password

  db.query(
    'SELECT password FROM users WHERE username = ?',
    [username],
    (err, users) => {
      if (err) {
        res.status(401).send({ error: err })
      }
      if (users.length > 0) {
        bcrypt.compare(password, users[0].password, (err, match) => {
          if (err) {
            return err
          }
          match
            ? res.status(200).send({
                message: 'Successfully logged in',
              })
            : res
                .status(401)
                .send({ error: 'Authorization failed, provide correct info' })
        })
      } else {
        res.status(401).send({ error: 'Username not found' })
      }
    }
  )
})
module.exports = router
