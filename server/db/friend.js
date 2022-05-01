const Sequelize = require('sequelize')
const db = require('./database.js')


const Friend = db.define('friend', {
  name: { type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }},
    imageUrl: {
      type: Sequelize.STRING,
      defaultValue: 'https://i.etsystatic.com/22639391/r/il/3e2279/2377220646/il_1588xN.2377220646_fdjg.jpg',
    },
})

module.exports = Friend
