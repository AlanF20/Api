import * as dotenv from 'dotenv'
import postgres from 'postgres'

dotenv.config()
const DB_URI = process.env.DB_URI
export const sql = postgres(DB_URI)