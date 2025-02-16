import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

const TOKEN = process.env.HOME_ASSISTANT_TOKEN || null

export const getTeslaEntityState = async (entityId = 'sensor.onyx_battery') => {
  const result = await axios.get(`${process.env.HOME_ASSISTANT_URL}/api/states/${entityId}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  })
  return result.data
}

export const getTeslaStates = async () => {
  const result = await axios.get(`${process.env.HOME_ASSISTANT_URL}/api/states`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  })
  return result.data.filter((entity) => entity.entity_id.includes('sensor.onyx'))
    .map((entity) => ({
      entity_id: entity.entity_id,
      state: entity.state
    }))
}