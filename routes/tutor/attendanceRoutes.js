const router = require('express').Router()
const db = require('../../models/db')

router.get('/', (req, res) => {
  //   res.send(req.user)
  db.query(
    'SELECT * FROM attendance WHERE courseID = (SELECT courseID FROM tutor_records WHERE tutorID = ?)',
    [req.user.uuid],
    (err, results) => {
      if (err)
        return res.status(501).send({
          error: err,
        })
      return res.send({
        results,
      })
    }
  )
})

router.post('/add', (req, res) => {
  const courseID = req.body.courseID
  const studentID = req.body.studentID
  const isPresent = req.body.isPresent

  db.query(
    'SELECT presence,lastDate FROM attendance WHERE studentID = ? AND courseID=?',
    [studentID, courseID],
    (err, results) => {
      if (err) {
        return res.status(501).send({
          error: err,
        })
      }
      if (results) {
        try {
          let presence = parseInt(results[0].presence)
          const lastDate = parseInt(results[0].lastDate)
          // console.log(lastDate * 60)
          const currentDate = Date.now()
          console.log(typeof currentDate)
          if (currentDate >= lastDate + 60 * 60) {
            if (isPresent === true) {
              presence += 1
              db.query(
                'UPDATE attendance SET presence = ?, lastDate = ? WHERE studentID = ? AND courseID=?',
                [presence, currentDate, studentID, courseID],
                (err) => {
                  if (err) {
                    return res.status(501).send({
                      error: err,
                    })
                  }
                  return res.status(200).send({
                    message: 'Success',
                  })
                }
              )
            }
          } else {
            res.status(400).send({
              error: 'Cannot process request',
            })
          }
        } catch (error) {
          res.status(404).send({
            error: 'Record not found',
          })
        }
      }
    }
  )
})

module.exports = router
