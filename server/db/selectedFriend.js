const Sequelize = require('sequelize')
const db = require('./database.js')


const SelectedFriend = db.define('selectedFriend', {
  name: { type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }},
})

module.exports = SelectedFriend
