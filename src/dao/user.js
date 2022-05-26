import Sequelize from 'sequelize'
import conn from './conn'

const User = conn.define('user', {
  user_id : {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  firstName: {
    type: Sequelize.STRING,
  },
  isActive: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  }
})

export default User