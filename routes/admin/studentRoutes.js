const router = require('express').Router()
const db = require('../../models/db')
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
  const studentID = uuidv4()
  const name = req.body.name
  const address = req.body.address
  const email = req.body.email
  const contact = req.body.contact
  const moduleID = req.body.moduleID

  if (!name || !email || !address || !contact || !moduleID || !studentID) {
    return res.status(400).send({
      error: 'Malformed request',
    })
  }
  db.query(
    'SELECT * FROM student_records WHERE studentID = ? ',
    [studentID],
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
        'INSERT INTO student_records (studentID,name,address,email,contact,moduleID) VALUES(?,?,?,?,?,?)',
        [studentID, name, address, email, contact, moduleID],
        (err) => {
          if (err) {
            return res.status(501).send({
              error: err,
            })
          }
          db.query(
            'INSERT INTO attendance (studentID,presence,lastDate) VALUES(?,?,?)',
            [studentID, 0, Date.now()],
            (err) => {
              if (err) {
                return res.status(501).send({
                  error: err,
                })
              }
              res.send({
                message: 'Successfully added a attendace + student record',
              })
            }
          )
        }
      )
    }
  )
})
module.exports = router
