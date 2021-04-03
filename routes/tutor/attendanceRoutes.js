// const router = require('express').Router()
// const db = require('../../models/db')

// router.get('/', (req, res) => {
//   db.query('SELECT * FROM attendance WHERE uuid = (SELECT tutorID FROM tutor_records)', (err, results) => {
//     if (err)
//       return res.status(501).send({
//         error: err,
//       })
//     if (results)
//       return res.send({
//         results,
//       })
//   })
// })

// module.exports = router
