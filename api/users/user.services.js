import { sql } from "../../connection.js"

export async function getUsers() {
  try {
    const users = await sql`SELECT * FROM user_table`
    return users
  } catch (err) {
    console.log(err.message)
    throw new Error('Error al obtener a los usuarios.')
  }
}

export async function postUser(userInfo) {
  try {
    await sql`INSERT INTO user_table ${sql(userInfo, 'name', 'email')}`
  } catch (err) {
    console.log(err.message)
    throw new Error('Error al crear el usuario.')
  }
}
export async function editUser(id, userInfo) {
  try {
    const columns = Object.keys(userInfo)
    console.log(columns)
    await sql`UPDATE user_table SET ${sql(userInfo, columns)} WHERE id = ${id}`
  } catch (err) {
    console.log(err.message)
    throw new Error('Error al editar el usuario.')
  }
}

export async function deleteUser(id) {
  try {
    await sql`DELETE FROM user_table WHERE id = ${id}`
  } catch (err) {
    console.log(err.message)
    throw new Error('Error al eliminar el usuario.')
  }
}