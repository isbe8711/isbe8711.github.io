const myCar = new Object();
myCar.color = 'gray';
myCar.make = 'mazda';
myCar.model = "CX-5";
myCar.year = "2017";

// general syntax: object.property = value;

console.log(myCar.make);

const mySecondCar= {
  color: 'blue',
  make: 'ford',
  model: 'Ranger',
  year: '2020'
}

console.log(mySecondCar.drive);


{
  “squadName”: “Super hero squad”,
  “homeTown”: “Metro City”,
  “formed”: 2016,
  “secretBase”: “Super tower”,
  “active”: true,
  “members”: [
    {
      “name”: “Molecule Man”,
      “age”: 29,
      “secretIdentity”: “Dan Jukes”,
      “powers”: [
        “Radiation resistance”,
        “Turning tiny”,
        “Radiation blast”
      ]
    },
    {
      “name”: “Madame Uppercut”,
      “age”: 39,
      “secretIdentity”: “Jane Wilson”,
      “powers”: [
        “Million tonne punch”,
        “Damage resistance”,
        “Superhuman reflexes”
      ]
    },
    {
      “name”: “Eternal Flame”,
      “age”: 1000000,
      “secretIdentity”: “Unknown”,
      “powers”: [
        “Immortality”,
        “Heat Immunity”,
        “Inferno”,
        “Teleportation”,
        “Interdimensional travel”
      ]
    }
  ]
}

function populateHeader(x){
  const header = document.querySelector('header');
  const mH1 = document.createElement('h1');

  myH1.textContent = x ['squadName'];
  header.appeendcHILD(myH1);

  const myPara = doocument.createElement('p');
  myPara.textContent = 'Hometown: ${x['hoometown']}'

  header.appendChild(myPara)
}
