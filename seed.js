const { green, red } = require("chalk");
const { db, Friend, Drink, SelectedFriend, Order } = require("./server/db");

const drinks = [{
  name: 'Beer',
  price: '5'
}, {
  name: 'Shot',
  price: '7'
}, {
  name: 'Mixed Drink',
  price: '10'
}];

const friends = [{
  name: "Ryan",
  imageUrl: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4065648.png',

},
{
 name: "Scott",
  imageUrl: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3024.png',

},
{
  name: 'jeff',
  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYzATYjYgzcDTxuxTR_b5BEgtR0mcXnzQTaA&usqp=CAU',
}];

const selects = [{
  name: "Bill"
}]

const orders = [{
  buyer: "Ryan",
  number: "5",
  price: '20'
}]

const seed = async () => {
  try {
    await db.sync({ force: true });

    await Promise.all(friends.map(friend => {
      return Friend.create(friend);
    }));
    await Promise.all(drinks.map(drink => {
      return Drink.create(drink);
    }));
    await Promise.all(selects.map(select => {
      return SelectedFriend.create(select);
    }));
    await Promise.all(orders.map(order => {
      return Order.create(order);
    }));

    console.log(green('Seeding success!'))
    db.close()

    // seed your database here!
  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green("Seeding success!"));
      db.close();
    })
    .catch(err => {
      console.error(red("Oh noes! Something went wrong!"));
      console.error(err);
      db.close();
    });
}
