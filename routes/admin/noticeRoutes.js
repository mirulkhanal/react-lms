const router = require('express').Router()
const db = require('../../models/db')
router.get('/', (req, res) => {
  try {
    db.query('SELECT * FROM announcements', (err, results) => {
      if (err) {
        return res.status(501).send({
          error: 'Error at DB_CONNECTION',
        })
      }
      res.send({
        message: 'success',
        results: results,
      })
    })
  } catch (err) {
    res.status(501).send({
      error: err,
    })
  }
})

router.post('/add', (req, res) => {
  const title = req.body.title
  const content = req.body.content
  const timeStamp = new Date()

  if (!title || !content)
    return res.status(400).send({
      error: 'Malformed request',
    })

  db.query(
    'INSERT INTO announcements (title,content,timestamp) VALUES (?,?,?)',
    [title, content, timeStamp],
    (err) => {
      if (err) {
        return res.status(501).send({
          error: 'Error while writing to DB',
        })
      }
      res.send({
        message: 'Successfully added an announcement',
      })
    }
  )
})

module.exports = router
