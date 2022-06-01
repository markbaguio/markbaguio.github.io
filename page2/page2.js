const miniGameTitle = document.querySelector("#minigame_title");
const notAvailable = document.querySelector("#not_available");
const randomDogImage = document.querySelector("#api_title");

const generateRandomDogButton = document.querySelector("#call_api_button");
const dogImageContainer = document.querySelector(".random_dog_container");

let colorArray = [
  "#364966",
  "#201156",
  "#4C126C",
  "#26474E",
  "hotpink",
  "red",
  "violet",
  "blue",
  "#332c61",
  "#930395",
  "5c4ca4",
];

function getRandomDog() {
  //API CALL
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      dogImageContainer.innerHTML = `<img src=${data.message}>`;
    });
}

function getRandomNumber() {
  return Math.floor(Math.random() * colorArray.length + 1);
}

function randomColorSwitcher() {
  for (let i = 0; i < colorArray.length; i++) {
    miniGameTitle.style.color = colorArray[getRandomNumber()];
    notAvailable.style.color = colorArray[getRandomNumber()];
    randomDogImage.style.color = colorArray[getRandomNumber()];
  }
}

setInterval(randomColorSwitcher, 500);

generateRandomDogButton.addEventListener("click", getRandomDog);
