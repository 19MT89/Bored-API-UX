//GET REQUEST

const activityDisplay = document.querySelector('.activity')
const typeDisplay = document.querySelector('.type')
const participantsDisplay = document.querySelector('.participants')
const priceDisplay = document.querySelector('.price')
const button = document.querySelector('.glow-on-hover')
var randomNumber
var randomInteger


//GET REQUEST che prende i dati e li scrive nel DIV
//Dal dataset viene selezionato un nome random
function getData(){
  fetch('https://www.boredapi.com/api/activity/')
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    const activity = data.activity
    console.log(activity)
    activityDisplay.innerHTML = activity
    const type = data.type
    console.log(type)
    typeDisplay.innerHTML = type
    const participants = data.participants
    console.log(participants)
    participantsDisplay.innerHTML = participants
    const price = data.price
    console.log(price)
    priceDisplay.innerHTML = price
  })
}


button.addEventListener('click', getData)
