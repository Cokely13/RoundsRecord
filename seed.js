const { green, red } = require("chalk");
const { db, Campus, Student } = require("./server/db");

const campuses = [{
  name: 'Duke',
  imageUrl: 'https://d3cin4duo2vkym.cloudfront.net/images/2019/11/7/Cameron_Indoor.jpg',
  address: "Cameron Indoor",
  description: "ACC school in durham"
}, {
  name: 'Kansas',
  imageUrl: 'https://kake.images.worldnow.com/images/21906372_G.jpeg',
  address: "Allen Fieldhouse",
  description: "Big12 school in Kansas"
}, {
  name: 'Maryland',
  imageUrl: 'https://wtop.com/wp-content/uploads/2017/08/Cole-Field-House-7.jpg',
  address: "Cole fieldhouse",
  description: "ACC school in College park"
}];

const students = [{
  firstName: 'Jayson',
  lastName: 'Tatum',
  email: "tatum@gmail.com",
  imageUrl: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4065648.png',
  gpa: '4.0',
  campusId: 1
}, {
  firstName: 'Ryan',
  lastName: 'Smith',
  email: "smith@gmail.com",
  imageUrl: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066354.png&w=350&h=254',
  gpa: '2.5',
  campusId: 2
}, {
  firstName: 'Bil',
  lastName: 'Jones',
  email: "ct@gmail.com",
  imageUrl: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4376.png&w=350&h=254',
  gpa: '1.6',
  campusId: 1
},
{
  firstName: 'Chuck',
  lastName: 'Taylor',
  email: "ct@gmail.com",
  imageUrl: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4376.png&w=350&h=254',
  gpa: '3.3',
}];


const seed = async () => {
  try {
    await db.sync({ force: true });

    await Promise.all(campuses.map(campus => {
      return Campus.create(campus);
    }));
    await Promise.all(students.map(student => {
      return Student.create(student);
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
