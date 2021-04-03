const router = require('express').Router()
const db = require('../../models/db')
const { v4: uuidv4 } = require('uuid')

router.get('/', (req, res) => {
  db.query('SELECT * FROM tutor_records', (err, results) => {
    if (!err)
      return res.send({
        results,
      })
    res.status(501).send({
      error: err,
    })
  })
})

router.post('/add', (req, res) => {
  const tutorID = uuidv4()
  const name = req.body.name
  const contact = req.body.contact
  const address = req.body.address
  const email = req.body.email
  const courseID = req.body.courseID

  if (!tutorID || !name || !contact || !address || !email || !courseID) {
    return res.send({ message: 'Malformed request' })
  }
  db.query(
    'INSERT INTO tutor_records (tutorID,name,contact,address,email,courseID) VALUES (?,?,?,?,?,?)',
    [tutorID, name, contact, address, email, courseID],
    (err) => {
      if (err) return res.status(501).send({ error: err })
      res.send({
        message: 'Successfully added a tutor',
      })
    }
  )
})
module.exports = router
