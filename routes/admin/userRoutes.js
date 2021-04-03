const router = require('express').Router()
const db = require('../../models/db')
const bcrypt = require('bcrypt')
// get all users, without the password
router.get('/', (req, res) => {
  db.query('SELECT id,uuid,username,type FROM users', (err, results) => {
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
  const uuid = req.body.uuid
  const type = req.body.type

  if (!username || !password || !uuid || !type) {
    res.send({ message: 'Malformed request' })
  } else {
    db.query(
      'SELECT uuid FROM users WHERE username = ?',
      [username],
      (err, results) => {
        if (err) {
          res.status(501).send({
            error: err,
          })
        }
        if (results.length > 0 || !results) {
          return res.status(400).send({
            error: 'User already exists',
          })
        } else {
          bcrypt.hash(password, 10, (err, hashedPassword) => {
            if (err) {
              return res.status(501).send({ error: err })
            }
            db.query(
              'INSERT INTO users (username,password,uuid,type) VALUES (?,?,?,?)',
              [username, hashedPassword, uuid, type],
              (err) => {
                if (err) {
                  return res.status(501).send({
                    error: err,
                  })
                }
                return res.send({ message: 'Successfully created a user' })
              }
            )
          })
        }
      }
    )
  }
})

// delete user based on id
router.delete('/delete/:uuid', (req, res) => {
  const userID = req.params.uuid

  if (userID) {
    db.query('DELETE FROM users WHERE uuid = ?', [userID], (err) => {
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

// edit user based on id
router.patch('/edit/:uuid', (req, res) => {
  const userID = req.params.uuid
  const property = req.body.property
  const newValue = req.body.value
  if (property === 'type' || property === 'username') {
    db.query(
      `UPDATE users SET ${property} = ? WHERE uuid = ?`,
      [newValue, userID],
      (err) => {
        if (err) {
          res.status(501).send({
            error: err,
          })
        }
        res.send({
          message: 'Successfully updated the user',
        })
      }
    )
  } else {
    res.status(501).send({
      error: 'Cannot edit userID or password',
    })
  }
})

module.exports = router
