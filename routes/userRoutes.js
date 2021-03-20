const router = require('express').Router()
const db = require('../models/db')
const bcrypt = require('bcrypt')

// get all users, without the password
router.get('/', (req, res) => {
  db.query('SELECT id,username,name,email,type FROM users', (err, results) => {
    if (err) {
      res.status(501).send({
        error: error,
      })
    }
    res.send({
      users: results,
    })
  })
})

// create user route
router.post('/create', (req, res) => {
  const username = req.body.username
  const password = req.body.password
  const name = req.body.name
  const email = req.body.email
  const type = req.body.type

  if (!username || !password || !name || !email || !type) {
    res.send({ message: 'Please provide all the required fields' })
  } else {
    db.query(
      'SELECT id FROM users WHERE username = ?',
      [username],
      (err, results) => {
        if (err) {
          res.status(501).send({
            error: err,
          })
        }
        if (results.length > 0 || !results) {
          res.status(400).send({
            error: 'User already exists',
          })
        } else {
          bcrypt.hash(password, 10, (err, hashedPassword) => {
            if (err) {
              res.status(501).send({ error: err })
            }
            db.query(
              'INSERT INTO users (username,password,name,email,type) VALUES (?,?,?,?,?)',
              [username, hashedPassword, name, email, type],
              (err) => {
                if (err) {
                  res.status(501).send({
                    error: errr,
                  })
                }
                res.send({ message: 'Successfully created a user' })
              }
            )
          })
        }
      }
    )
  }
})

// delete user based on id
router.delete('/delete/:id', (req, res) => {
  const userID = req.params.id

  if (userID) {
    db.query('DELETE FROM users WHERE id = ?', [userID], (err) => {
      if (err) {
        res.send(501).send({
          error: err,
        })
      }
      res.status(200).send({
        message: 'Successfully deleted the user',
      })
    })
  } else {
    res.send({
      error: 'Provide a valid ID',
    })
  }
})

module.exports = router
