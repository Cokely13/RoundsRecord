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
},
{
  name: 'UNC',
  imageUrl: 'https://sportsmatik.com/uploads/wiki-venues/dean-smith-center_1582024047.jpg',
  address: "Dean Dome",
  description: "ACC school in Chapel Hill"
}];

const students = [{
  firstName: 'Jayson',
  lastName: 'Tatum',
  email: "tatum@gmail.com",
  imageUrl: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4065648.png',
  gpa: '4.0',
  campusId: 1
},
{
  firstName: 'JJ',
  lastName: 'Redick',
  email: "jj@gmail.com",
  imageUrl: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3024.png',
  gpa: '3.2',
  campusId: 1
},
{
  firstName: 'Paul',
  lastName: 'Pierce',
  email: "p@gmail.com",
  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYzATYjYgzcDTxuxTR_b5BEgtR0mcXnzQTaA&usqp=CAU',
  gpa: '2.5',
  campusId: 2
}, {
  firstName: 'Payton',
  lastName: 'Pritchard',
  email: "ct@gmail.com",
  imageUrl: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066354.png&w=350&h=254',
  gpa: '1.6',
  campusId: 2
},
{
  firstName: 'Juan',
  lastName: 'Dixon',
  email: "jd@gmail.com",
  imageUrl: 'https://umterps.com/images/2020/3/18/dixon_juan_h1_c02.jpg?width=300',
  gpa: '3.6',
  campusId: 3
},
{
  firstName: 'Sidney',
  lastName: 'Dean',
  email: "ct@gmail.com",
  imageUrl: 'https://rctucker63.files.wordpress.com/2014/12/sidney-deane.jpg',
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
