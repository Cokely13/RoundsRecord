const db = require('./database.js')
const Sequelize = require('sequelize')


const Order = db.define('order', {
  buyer:  { type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }},
  number: { type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }},
    price: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
})

module.exports = Order
