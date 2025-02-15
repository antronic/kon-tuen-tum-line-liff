import { MongoClient } from 'mongodb'

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017'

export const connect = async () => {
  const client = new MongoClient(MONGODB_URI)
  await client.connect()
  const db = client.db('kon_tuen_tum')
  return db
}