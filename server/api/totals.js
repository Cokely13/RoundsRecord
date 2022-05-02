const router = require('express').Router()
const { Total } = require('../db')


router.get('/', async (req, res, next) => {
  try {
    let drinks = await Total.findAll()
    res.json(drinks)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const drink = await Total.findByPk(req.params.id);
    res.json(drink);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await Total.create(req.body));
  } catch (error) {
    next(error);
  }
});


module.exports = router
