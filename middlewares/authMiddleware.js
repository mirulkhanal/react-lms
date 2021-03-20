const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const token = req.headers.authorization
  if (token) {
    const user = jwt.verify(token.split(' ')[1], 'secretcode')
    if (user.type !== 'admin') {
      return res.status(401).send({
        error: 'Admin access only',
      })
    } else {
      req.user = user
      next()
    }
  } else {
    res.status(401).send({
      error: 'Unauthorized',
    })
  }
}
