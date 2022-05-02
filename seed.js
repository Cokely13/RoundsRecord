const { green, red } = require("chalk");
const { db, Friend, Drink, SelectedFriend, Order, Total } = require("./server/db");

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
  imageUrl: 'https://images.ctfassets.net/hrltx12pl8hq/5qusjAtcAaetdPsing4jR6/2db2f75abd2840caa09d21312b4fc6c8/animals-wildlife-shutterstock_1066200380.jpg?fit=fill&w=480&h=320',

},
{
 name: "Scott",
  imageUrl: 'https://images.unsplash.com/photo-1566650554919-44ec6bbe2518?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwYW5pbWFsfGVufDB8fDB8fA%3D%3D&w=1000&q=80',

},
{
  name: 'Jeff',
  imageUrl: 'https://imageio.forbes.com/specials-images/imageserve/5faad4255239c9448d6c7bcd/Best-Animal-Photos-Contest--Close-Up-Of-baby-monkey/960x0.jpg?fit=bounds&format=jpg&width=960',
},
{
name: 'Rob',
imageUrl: 'https://secure.img1-fg.wfcdn.com/im/03796479/resize-h445%5Ecompr-r85/4307/43074506/Hanging+Golden+Retriever+Puppy+Statue.jpg',
}];

// const selects = [{
//   name: "Bill"
// }]

const orders = [{
  buyer: "Ryan",
  number: "5",
  price: '20'
}]

const totals = [{
  name: "Ryan",
  numberOfOrders: 1,
  total: '20',
  friendId: 1
},
{
  name: "Jeff",
  numberOfOrders: 2,
  total: 10,
  friendId: 3
},
{
  name: "Scott",
  numberOfOrders: 3,
  total: 15,
  friendId: 2
},
{
name: "Rob",
numberOfOrders: 4,
total: 35,
friendId: 4}]

const seed = async () => {
  try {
    await db.sync({ force: true });

    await Promise.all(friends.map(friend => {
      return Friend.create(friend);
    }));
    await Promise.all(drinks.map(drink => {
      return Drink.create(drink);
    }));
    // await Promise.all(selects.map(select => {
    //   return SelectedFriend.create(select);
    // }));
    await Promise.all(orders.map(order => {
      return Order.create(order);
    }));
    await Promise.all(totals.map(total => {
      return Total.create(total);
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
