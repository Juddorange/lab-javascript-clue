//Characters
const mrGreen ={
  first_name:   "Jacob",
  last_name:    "Green",
  color:        "green",
  description:  "He has a lot of connections",
  age:          45,
  image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation:   "Entrepreneur"
  }
  
  const drOrchid ={
  first_name:   "Doctor",
  last_name:    "Orchid",
  color:        "white",
  description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age:          26,
  image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  occupation:    "Scientist"
  }
  
  const profPlum = {
  first_name:   "Victor",
  last_name:    "Plum",
  color:        "purple",
  description:  "Billionaire video game designer",
  age:          22,
  image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation:   "Designer"
  }
  
  const missScarlet = {
  first_name:   "Kasandra",
  last_name:    "Scarlet",
  color:        "red",
  description:  "She is an A-list movie star with a dark past",
  age:          31,
  image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation:   "Actor"
  }
  
  const mrsPeacock = {
  first_name:   "Eleanor",
  last_name:    "Peacock",
  color:        "blue",
  description:  "She is from a wealthy family and uses her status and money to earn popularity",
  age:          36,
  image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation:   "Socialité"
  }
  
  const mrMustard = {
  first_name:   "Jack",
  last_name:    "Mustard",
  color:        "yellow",
  description:  "He is a former football player who tries to get by on his former glory",
  age:          62,
  image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation:   "Retired Football player"
  }

//Weapons 
const rope = {name: "rope", weight: 10}
const knife = {name: "knife", weight: 8}
const candlestick = {name: "candlestick", weight: 2}
const dumbell = {name: "dumbbell", weight: 30}
const poison = {name: "poison", weight: 2}
const axe = {name: "axe", weight: 15}
const bat = {name: "bat", weight: 13}
const trophy = {name: "trophy", weight: 25}
const pistol = {name: "pistol", weight: 20}

// Rooms
const dining = {name: "Dining Room"}
const conservatory = {name: "Conservatory"}
const kitchen = {name: "Kitchen"}
const study = {name: "Study"}
const library = {name: "Library"}
const billiard = {name: "Billiard Room"}
const lounge = {name: "Lounge"}
const ball = {name: "Ballroom"}
const hall = {name: "Hall"}
const spa = {name: "Spa"}
const living = {name: "Living Room"}
const observatory = {name: "Observatory"}
const theater = {name: "Theater"}
const guest = {name: "Guest House"}
const patio = {name: "Patio"}


// Characters Collection
const charactersArray = [
 {
  first_name:   "Jacob",
  last_name:    "Green",
  color:        "green",
  description:  "He has a lot of connections",
  age:          45,
  image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation:   "Entrepreneur"
  },
  
{
  first_name:   "Doctor",
  last_name:    "Orchid",
  color:        "white",
  description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age:          26,
  image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  occupation:    "Scientist"
  },
  
{
  first_name:   "Victor",
  last_name:    "Plum",
  color:        "purple",
  description:  "Billionaire video game designer",
  age:          22,
  image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation:   "Designer"
  },
  
{
  first_name:   "Kasandra",
  last_name:    "Scarlet",
  color:        "red",
  description:  "She is an A-list movie star with a dark past",
  age:          31,
  image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation:   "Actor"
  },
  
{
  first_name:   "Eleanor",
  last_name:    "Peacock",
  color:        "blue",
  description:  "She is from a wealthy family and uses her status and money to earn popularity",
  age:          36,
  image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation:   "Socialité"
  },
  
{
  first_name:   "Jack",
  last_name:    "Mustard",
  color:        "yellow",
  description:  "He is a former football player who tries to get by on his former glory",
  age:          62,
  image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation:   "Retired Football player"
  }];

// Rooms Collection
const roomsArray = [
{name: "rope", weight: 10},
{name: "knife", weight: 8},
{name: "candlestick", weight: 2},
{name: "dumbbell", weight: 30},
{name: "poison", weight: 2},
{name: "axe", weight: 15},
{name: "bat", weight: 13},
{name: "trophy", weight: 25},
{name: "pistol", weight: 20}];

// Weapons Collection
const weaponsArray = [
{name: "Dining Room"},
{name: "Conservatory"},
{name: "Kitchen"},
{name: "Study"},
{name: "Library"},
{name: "Billiard Room"},
{name: "Lounge"},
{name: "Ballroom"},
{name: "Hall"},
{name: "Spa"},
{name: "Living Room"},
{name: "Observatory"},
{name: "Theater"},
{name: "Guest House"},
{name: "Patio"},
];


function randomSelector(array) {
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

function pickMystery() {
  const randomCharacter = randomSelector(charactersArray);
  const randomWeapons = randomSelector(weaponsArray);
  const randomRoom = randomSelector(roomsArray);

  const mysteryEnvelops = {suspect : randomCharacter, weapon : randomWeapons, room : randomRoom};

  return mysteryEnvelops;
}

const revealMystery = pickMystery => {
  return pickMystery.suspect.first_name + " " + pickMystery.suspect.last_name + " killed Mr. Boddy using the " + pickMystery.weapon.name+ " in the " + pickMystery.room.name+"!!!!";
}