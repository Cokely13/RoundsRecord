const router = require('express').Router()
const { Student, Campus } = require('../db')


router.get('/', async (req, res, next) => {
  try {
    let students = await Student.findAll()
    res.json(students)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.id, {
      include: {model: Campus}
    });
    res.json(student);
  } catch (err) {
    next(err);
  }
});

module.exports = router
