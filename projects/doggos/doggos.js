const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';
const select = document.querySelector('.breeds');
const img = document.querySelector(".dog-img");
const title = document.querySelector("#topDog");
const spinner = document.querySelector(".spinner");


// dog breed list
fetch(BREEDS_URL)
  .then(response => { //.then(function(response) {})
    return response.json();
  })
  .then(data => { //.then(function(data) {})
    // console.log(data);
    // const breedsObject = data.message;   // grab .message from data
    // const breedsArray = Object.keys(breedsObject); // grab .keys from message
    const breedsArray = Object.keys(data.message);

    for (let i = 0; i < breedsArray.length; i++) {
      const option = document.createElement('option');
      option.value = breedsArray[i];
      option.innerText = breedsArray[i];
      select.appendChild(option);
    }


  })

  // change dog img
  function getNewDoggo(url, dogBreed) {
    spinner.classList.add("show");
    img.classList.remove("show");

    fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      img.src = data.message;
      img.alt = `Cute ${dogBreed}`;
      title.innerHTML = `The best doggo's are ${dogBreed}`;
    })
  }

  img.addEventListener("load", function(){
    spinner.classList.remove("show");
    img.classList.add("show");
  })

  function removeDoggo() {}

  
  // select dog breed
  select.addEventListener("change", function(e) {
    // make url and pass dogBreed
    let url = `https://dog.ceo/api/breed/${e.target.value}/images/random`;
    let dogBreed = e.target.value 
    // fetch from the API    // use the URL to change the current image
    getNewDoggo(url, dogBreed);
    })

