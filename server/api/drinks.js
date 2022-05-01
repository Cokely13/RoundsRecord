const router = require('express').Router()
const { Drink } = require('../db')


router.get('/', async (req, res, next) => {
  try {
    let drinks = await Drink.findAll()
    res.json(drinks)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const drink = await Drink.findByPk(req.params.id);
    res.json(drink);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await Drink.create(req.body));
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const drink = await Drink.findByPk(req.params.id);
    res.send(await drink.update(req.body));
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const drink = await Drink.findByPk(req.params.id);
    await drink.destroy();
    res.send(drink);
  } catch (error) {
    next(error);
  }
});

module.exports = router
