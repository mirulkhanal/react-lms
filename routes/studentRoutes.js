const router = require('express').Router()
const db = require('../models/db')
const { v4: uuidv4 } = require('uuid')
router.get('/', (req, res) => {
  db.query('SELECT * FROM student_records', (err, results) => {
    if (err)
      return res.send(501).send({
        error: err,
      })
    res.send({
      results,
    })
  })
})
router.post('/add', (req, res) => {
  const name = req.body.name
  const email = req.body.email
  const address = req.body.address
  const phone = req.body.phone
  const courseID = req.body.courseID
  const uuid = uuidv4()

  if (!name || !email || !address || !phone || !courseID || !uuid) {
    return res.status(400).send({
      error: 'Missing property',
    })
  }
  db.query(
    'SELECT * FROM student_records WHERE uuid = ? ',
    [uuid],
    (err, results) => {
      if (results && results.length > 0) {
        return res.status(501).send({
          error: 'Student already exists in the records',
        })
      }
      if (err) {
        return res.status(501).send({
          error: err,
        })
      }
      db.query(
        'INSERT INTO student_records (name, email, address, phone, courseID, uuid) VALUES(?,?,?,?,?,?)',
        [name, email, address, phone, courseID, uuid],
        (err) => {
          if (err) {
            return res.status(501).send({
              error: err,
            })
          }
          res.send({
            message: 'Successfully added a student record',
          })
        }
      )
    }
  )
})
module.exports = router
