const Sequelize = require('sequelize')
const db = require('./database.js')


const Drink = db.define('drink', {
  name: { type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }},
    price: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
})

module.exports = Drink
