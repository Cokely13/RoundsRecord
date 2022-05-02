const db = require('./database.js')
const Sequelize = require('sequelize')


const Total = db.define('total', {
  name:  { type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }},
  numberOfOrders: { type: Sequelize.INTEGER,
    defaultValue: 0,
    validate: {
      notEmpty: true
    }},
    total: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
})

module.exports = Total
