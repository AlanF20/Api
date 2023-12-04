import { sql } from "../../connection.js"

export async function getUsers() {
  try {
    const users = await sql`SELECT * FROM user_table`
    return users
  } catch (err) {
    throw new Error('Error al obtener a los usuarios.')
  }
}

export async function postUser(userInfo) {
  try {
    console.log(userInfo)
    await sql`INSERT INTO user_table ${sql(userInfo, 'name', 'email')}`
  } catch (err) {
    console.log(err.message)
    throw new Error('Error al crear el usuario.')
  }
}