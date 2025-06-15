const jwt = require("jsonwebtoken")

function generateAccessToken(payload) {
  return jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: '1800000s' });
}

module.exports ={ generateAccessToken }