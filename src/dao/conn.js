/**
 * 初始化 Sequelize
 */
import Sequelize from 'sequelize'
import path from 'path'
import sq3 from 'sqlite3'
import fs from 'fs'

const sqlite3 = sq3.verbose()
//指定db路径
const dbPath = process.env.NODE_ENV !== 'production' ? process.cwd() : path.join(path.dirname(process.execPath),'data')
if(!fs.existsSync(dbPath)) {
  fs.mkdirSync(dbPath)
}

let sequelize = new Sequelize({
  dialect: "sqlite",
  storage: path.join(dbPath,'app.db'),
  dialectModule: sqlite3,
  logging: console.log
})

export default sequelize