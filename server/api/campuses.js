const router = require('express').Router()
const { Campus, Student } = require('../db')


router.get('/', async (req, res, next) => {
  try {
    let campuses = await Campus.findAll()
    res.json(campuses)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.id, {
      include: {model: Student}
    });
    res.json(campus);
  } catch (err) {
    next(err);
  }
});

module.exports = router
