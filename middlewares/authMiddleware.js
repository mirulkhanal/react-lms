const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const token = req.headers.authorization
  if (token) {
    const user = jwt.verify(token.split(' ')[1], 'secretcode')
    req.user = user
    console.log(user)
    next()
  } else {
    res.status(401).send({
      error: 'Unauthorized',
    })
  }
}
