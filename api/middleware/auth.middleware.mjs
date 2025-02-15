export const verifyLineToken = async (req, res, next) => {
  const { accessToken } = req.query
  const response = await verifyAccessToken(accessToken)
  if (response && response.client_id === process.env.LINE_CHANNEL_ID) {
    next()
  } else {
    res.status(401).json({ error: 'Unauthorized', message: 'กลับไปล็อคอินมานะจ้ะ' })
  }
}