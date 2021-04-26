const router = require('express').Router()
const db = require('../../models/db')

// retrieve all available modules
router.get('/', (req, res) => {
  db.query('SELECT * FROM modules', (err, results) => {
    if (err) {
      return res.status(501).send({
        error: error,
      })
    }
    return res.send({
      results,
    })
  })
})

// add a module
router.post('/add', (req, res) => {
  const moduleLeader = req.body.moduleLeader
  const moduleName = req.body.moduleName
  const moduleID = req.body.moduleID

  if (!moduleName || !moduleID) {
    res.send({ message: 'Malformed request' })
  } else {
    db.query(
      'SELECT * FROM modules WHERE moduleID = ?',
      [moduleID],
      (err, results) => {
        if (err) {
          return res.status(501).send({
            error: err,
          })
        }
        if (results.length > 0 || !results) {
          return res.status(400).send({
            error: 'Module already exists',
          })
        } else {
          db.query(
            'INSERT INTO modules (moduleID,moduleName,moduleLeader) VALUES (?,?,?)',
            [moduleID, moduleName, moduleLeader],
            (err) => {
              if (err) {
                return res.status(501).send({
                  error: err,
                })
              }
              return res.send({ message: 'Successfully added a module' })
            }
          )
        }
      }
    )
  }
})

// edit module based on moduleID
router.patch('/edit/:id', (req, res) => {
  const moduleID = req.params.id
  const property = req.body.property
  const newValue = req.body.value
  if (
    property &&
    newValue &&
    (property === 'moduleID' ||
      property === 'moduleName' ||
      property === 'moduleLeader')
  ) {
    db.query(
      `UPDATE modules SET ${property} = ? WHERE moduleID = ?`,
      [newValue, moduleID],
      (err) => {
        if (err) {
          return res.status(501).send({
            error: err,
          })
        }
        return res.send({
          message: 'Successfully updated the Module',
        })
      }
    )
  } else {
    return res.status(501).send({
      error:
        "Invalid property name. Try 'moduleName', 'moduleLeader' or 'moduleID'",
    })
  }
})

// delete module based on moduleID
router.delete('/delete/:id', (req, res) => {
  const moduleID = req.params.id

  if (courseID) {
    db.query('DELETE FROM modules WHERE moduleID = ?', [moduleID], (err) => {
      if (err) {
        return res.send(501).send({
          error: err,
        })
      }
      return res.status(200).send({
        message: 'Successfully deleted the module',
      })
    })
  } else {
    return res.send({
      error: 'Provide a valid module ID',
    })
  }
})
module.exports = router
