import conn from './conn'
import User from './user'

let syncModel = async () => {
  await conn.sync()
}

export default {
  syncModel,
  User
}