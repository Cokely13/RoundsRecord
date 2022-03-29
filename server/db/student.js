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
      defaultValue: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chocolate-1536867147.jpg?resize=980:*',
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
