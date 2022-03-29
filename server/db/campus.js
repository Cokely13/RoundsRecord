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
      defaultValue: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chocolate-1536867147.jpg?resize=980:*',
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
