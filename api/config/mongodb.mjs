import dotenv from 'dotenv'
dotenv.config()

import { MongoClient } from 'mongodb'

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017'

const client = new MongoClient(MONGODB_URI, {
  maxPoolSize: 50,
  minPoolSize: 10,
})

const DATABASE = process.env.MONGODB_DATABASE || 'myapp'

/**
 * @type {import('mongodb').Db}
 */
let db

export const connect = async () => {
  try {
    console.log('Connecting to MongoDB...')
    await client.connect()
    if (!db) {
      db = client.db(DATABASE)
      console.log('Connected to MongoDB!')
    }

    console.log('Reusing existing connection...')
    return db
  } catch (error) {
    console.error('[X] Failed to connect to MongoDB', error)
  }
}