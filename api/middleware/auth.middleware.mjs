import {verifyAccessToken} from '../services/line.service.mjs'

function generateJWT(accessToken) {
  return jwt.sign({ accessToken }, process.env.JWT_SECRET, { expiresIn: '1h' })
}

export const verifyLineToken = async (req, res, next) => {
  const { accessToken } = req.query
  const response = await verifyAccessToken(accessToken)
  if (response && response.client_id === process.env.LINE_CHANNEL_ID) {
    const jwt = generateJWT(accessToken)
    req.jwt = jwt
    next()
  } else {
    res.status(401).json({ error: 'Unauthorized', message: 'กลับไปล็อคอินมานะจ้ะ' })
  }
}