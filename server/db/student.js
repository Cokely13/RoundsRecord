const Sequelize = require('sequelize')
const db = require('./database.js')


const Student = db.define('student', {
  firstName: { type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }},
    lastName: { type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }},
    email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true
    }
    },
    imageUrl: {
      type: Sequelize.STRING,
      defaultValue: 'https://i.etsystatic.com/22639391/r/il/3e2279/2377220646/il_1588xN.2377220646_fdjg.jpg',
    },
    gpa: {
      type: Sequelize.DECIMAL,
      validate: {
        max: 4.0,
        min: 0
      },
    },
})

module.exports = Student
