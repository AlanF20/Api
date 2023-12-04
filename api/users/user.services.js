import { sql } from "../../connection.js"

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtiene todos los usuarios de la base de datos.
 *     responses:
 *       200:
 *         description: Un arreglo de objetos que representan a los usuarios.
 *       500:
 *         description: Error al obtener a los usuarios.
 */
export async function getUsers() {
  try {
    const users = await sql`SELECT * FROM user_table`
    return users
  } catch (err) {
    console.log(err.message)
    throw new Error('Error al obtener a los usuarios.')
  }
}

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Inserta un nuevo usuario en la base de datos.
 *     parameters:
 *       - in: body
 *         name: userInfo
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             email:
 *               type: string
 *     responses:
 *       200:
 *         description: Usuario creado exitosamente.
 *       500:
 *         description: Error al crear el usuario.
 */
export async function postUser(userInfo) {
  try {
    await sql`INSERT INTO user_table ${sql(userInfo, 'name', 'email')}`
  } catch (err) {
    console.log(err.message)
    throw new Error('Error al crear el usuario.')
  }
}

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Edita la información de un usuario en la base de datos.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *       - in: body
 *         name: userInfo
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             email:
 *               type: string
 *     responses:
 *       200:
 *         description: Usuario editado exitosamente.
 *       500:
 *         description: Error al editar el usuario.
 */
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

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Elimina un usuario de la base de datos.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente.
 *       500:
 *         description: Error al eliminar el usuario.
 */
export async function deleteUser(id) {
  try {
    await sql`DELETE FROM user_table WHERE id = ${id}`
  } catch (err) {
    console.log(err.message)
    throw new Error('Error al eliminar el usuario.')
  }
}