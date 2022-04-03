const Sequelize = require('sequelize')
const db = require('./database.js')


const Campus = db.define('campus', {
  name: { type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }},
    imageUrl: {
      type: Sequelize.STRING,
      defaultValue: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/f8/9e/84/20180202-093117-largejpg.jpg?w=1200&h=-1&s=1',
    },
    address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
    },
    description: {
      type: Sequelize.TEXT,
    }
})

module.exports = Campus
