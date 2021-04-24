const router = require('express').Router()
const db = require('../../models/db')
const { v4: uuidv4 } = require('uuid')

var multer = require('multer')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'files/assignments/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '_' + file.originalname)
  },
})

var upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 2,
  },
})

router.get('/', (req, res) => {
  db.query(
    'SELECT * FROM assignments WHERE courseID = (SELECT courseID FROM tutor_records WHERE tutorID = ?)',
    [req.user.uuid],
    (err, results) => {
      if (err)
        return res.status(501).send({
          error: err,
        })
      if (results) {
        return res.send({
          results,
        })
      }
    }
  )
})

router.post('/add', upload.single('file'), (req, res) => {
  // console.log(req.user)
  const courseID = req.body.courseID
  const assignmentID = uuidv4()
  const dueDate = req.body.dueDate

  // TODO: kun course ko lagi asssignment
  // TODO: tutor tei ho ki haina

  if (!req.file || !courseID || !assignmentID || !dueDate) {
    return res.status(400).send({
      error: 'Malformed request',
    })
  }
  db.query(
    'INSERT INTO assignments (assignmentID,courseID,tutorID,file,dueDate) VALUES (?,?,?,?,?)',
    [assignmentID, courseID, req.user.uuid, req.file.path, req.body.dueDate],
    (err, results) => {
      if (err) {
        res.status(501).send({
          error: err,
        })
      }
      if (results) {
        res.send({ message: 'Successfully added an assignment' })
      }
    }
  )
})
module.exports = router
