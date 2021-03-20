const router = require('express').Router()
const db = require('../models/db')

// retrieve all available courses
router.get('/', (req, res) => {
  db.query('SELECT * FROM courses', (err, results) => {
    if (err) {
      res.status(501).send({
        error: error,
      })
    }
    res.send({
      courses: results,
    })
  })
})

// create a course
router.post('/create', (req, res) => {
  const id = req.body.id
  const name = req.body.name
  const moduleID = req.body.moduleID

  if (!id || !moduleID || !name) {
    res.send({ message: 'Please provide all the required fields' })
  } else {
    db.query('SELECT * FROM courses WHERE id = ?', [id], (err, results) => {
      if (err) {
        res.status(501).send({
          error: err,
        })
      }
      if (results.length > 0 || !results) {
        res.status(400).send({
          error: 'Course already exists',
        })
      } else {
        db.query(
          'INSERT INTO courses (id,name,moduleID) VALUES (?,?,?)',
          [id, name, moduleID],
          (err) => {
            if (err) {
              res.status(501).send({
                error: errr,
              })
            }
            res.send({ message: 'Successfully added a course' })
          }
        )
      }
    })
  }
})

// edit course based on courseID
router.patch('/edit/:id', (req, res) => {
  const courseID = req.params.id
  const property = req.body.property
  const newValue = req.body.value
  if (
    property &&
    newValue &&
    (property === 'id' || property === 'name' || property === 'moduleID')
  ) {
    db.query(
      `UPDATE courses SET ${property} = ? WHERE id = ?`,
      [newValue, courseID],
      (err) => {
        if (err) {
          res.status(501).send({
            error: err,
          })
        }
        res.send({
          message: 'Successfully updated the course',
        })
      }
    )
  } else {
    res.status(501).send({
      error: "Invalid property name. Try 'name', 'id' or 'moduleID'",
    })
  }
})

// delete course based on courseID
router.delete('/delete/:id', (req, res) => {
  const courseID = req.params.id

  if (courseID) {
    db.query('DELETE FROM courses WHERE id = ?', [courseID], (err) => {
      if (err) {
        res.send(501).send({
          error: err,
        })
      }
      res.status(200).send({
        message: 'Successfully deleted the course',
      })
    })
  } else {
    res.send({
      error: 'Provide a valid course ID',
    })
  }
})
module.exports = router
