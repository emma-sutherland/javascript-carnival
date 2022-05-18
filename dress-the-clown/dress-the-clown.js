// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

// create a function with input (arrow keys), and output function changeClownHead
// when arrow keys are pressed, headCounter increases by 1, and function is called
// google to find a function which checks if key pressed and which key (keyCode)

// could create a variable for head.src?  let headSrc = "./images/head" + headCounter + ".png"
// head.src = headSrc?

console.log('Dress The Clown!')

let headCounter = 0
let bodyCounter = 0
let shoesCounter = 0
let clothingIndex = 0

document.onkeydown = checkKey

function checkKey(e) {
  if (e.keyCode == '38') {
    changeBodyParts(-1)
  } else if (e.keyCode == '40') {
    changeBodyParts(+1)
  } else if (e.keyCode == '37') {
    changeClothing(-1)
  } else if (e.keyCode == '39') {
    changeClothing(+1)
  }
}

let head = document.getElementById('head')
let body = document.getElementById('body')
let shoes = document.getElementById('shoes')

function changeClothing(change) {
  if (clothingIndex == 0) {
    headCounter += change
    if (headCounter > 5) {
      headCounter = 0
    }
    if (headCounter < 0) {
      headCounter = 5
    }
    head.src = './images/head' + headCounter + '.png'
  }

  if (clothingIndex == 1) {
    bodyCounter += change

    // fixed it trying to find image6 and image-1 by putting limited if statement first.
    if (bodyCounter > 5) {
      bodyCounter = 0
    }
    if (bodyCounter < 0) {
      bodyCounter = 5
    }
    body.src = './images/body' + bodyCounter + '.png'
  }

  if (clothingIndex == 2) {
    shoesCounter += change
    if (shoesCounter > 5) {
      shoesCounter = 0
    }
    if (shoesCounter < 0) {
      shoesCounter = 5
    }
    shoes.src = './images/shoes' + shoesCounter + '.png'
  }
}

function changeBodyParts(change) {
  clothingIndex += change

  if (clothingIndex > 2) {
    clothingIndex = 0
  }
  if (clothingIndex < 0) {
    clothingIndex = 2
  }
}
