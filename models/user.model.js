const { Sequelize, DataTypes } = require("sequelize")
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env

const sequelize = new Sequelize(
  DB_NAME,
  DB_USER,
  DB_PASSWORD,

  { host: DB_HOST, dialect: "mysql" }
)

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.")
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error)
  })

const User = sequelize.define(
  "user",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
)

module.exports = User
