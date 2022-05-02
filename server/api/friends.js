const router = require('express').Router()
const { Friend, Order } = require('../db')


router.get('/', async (req, res, next) => {
  try {
    let friends = await Friend.findAll(
    )
    res.json(friends)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const friend = await Friend.findByPk(req.params.id, {
      include: {model: Order}
    });
    res.json(friend);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await Friend.create(req.body));
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const friend = await Friend.findByPk(req.params.id);
    res.send(await friend.update(req.body));
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const friend = await Friend.findByPk(req.params.id);
    await friend.destroy();
    res.send(friend);
  } catch (error) {
    next(error);
  }
});

module.exports = router
