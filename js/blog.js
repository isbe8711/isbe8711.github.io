const previousButton = document.querySelector('#previous');
const nextButton = document.querySelector('#next');

previousButton.addEventListener('click', getPreviousImage);
// nextButton.addEventListener('click', getNextImage);

function getPreviousImage(){
  console.log('clicked');
  console.log(superHeroes['photos'][0]["src"]);

}


let superHeroes = {
  "photos": [
    {
      "name": "Photo1",
      "src": "",
      "description": "Dan Jukes",

    },
    {
      "name": "photo2",
      "src": "",
      "description": "Jane Wilson",
    }
    {
      "name": "Photo3",
      "src": "",
      "description": "Dan Jukes",

    },
    {
      "name": "Photo4",
      "src": "",
      "description": "Dan Jukes",

    },
    {
      "name": "Photo5",
      "src": "",
      "description": "Dan Jukes",

    },
    {
      "name": "Photo6",
      "src": "",
      "description": "Dan Jukes",

    },
  ]
}
