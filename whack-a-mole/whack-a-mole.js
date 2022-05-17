// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

// Get references to the cells in the html table
// Create a array of all the cells - finding them by their tag 'td'

let cells = document.getElementsByTagName('td')
//console.log(cells)
//console.log(cells[1])

// Create a function to randomly select a cell number up to 25

let randomNumber = Math.floor(Math.random() * cells.length)
//console.log(randomNumber)

let randomCell = cells[randomNumber]
//console.log(randomCell)

// insert an image using js, into the randomCell container

let img = document.createElement('img')

img.src = './mole.png'
img.id = 'mole-image'
randomCell.appendChild(img)

// fix size of image
// create an id for mole image and make it same size as table data property

// create a 'whack-a-mole' function
// 1.  create empty function
// 2.  the function will run when mole image is clicked - test with console.log message
// 3.  mole needs to in a new random cell (reassign randomCell using same Math. method, and append image)

img.onclick = whackaMole

function whackaMole() {
  //console.log('whackaMole test')
  randomNumber = Math.floor(Math.random() * cells.length)
  randomCell = cells[randomNumber]
  randomCell.appendChild(img)
  let audio = new Audio()
  audio.src = 'whack-audio.wav'
  audio.play()
}
