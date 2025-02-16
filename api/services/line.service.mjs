import axios from 'axios'

const LINE_VERIFY_URL = 'https://api.line.me/oauth2/v2.1/verify'
const LINE_GET_PROFILE_URL = 'https://api.line.me/v2/profile'

export const verifyAccessToken = async (accessToken) => {
  try {
    const response = await axios.get(LINE_VERIFY_URL, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
      data: {
        access_token: accessToken
      },
    })

    return response.data
  } catch (error) {
    console.error('lineAccessTokenVerify error:', error)
    return null
  }
}

export const getProfile = async (accessToken) => {
  try {
    const response = await axios.get(LINE_GET_PROFILE_URL, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
    })

    return response.data
  } catch (error) {
    console.error('lineGetProfile error:', error)
    return null
  }
}