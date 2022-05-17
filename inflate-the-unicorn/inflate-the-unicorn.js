// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

// When we click on a unicorn image, a function clickUnicorn is called.

// First, find the unicorn image frames by class or adding an ID to each

let unicorn1 = document.getElementById('uni1')
let unicorn2 = document.getElementById('uni2')
let unicorn3 = document.getElementById('uni3')
//console.log(uni1)

// Next we are going to define inflation for each unicorn.  This will go from 0 to 3 to mimic the image names.  Starting at 0.

let inflationLevel1 = 0
let inflationLevel2 = 0
let inflationLevel3 = 0

// Now, set it so that each time we click on any of these pics, the function clickUnicorn is called
// Use the .onclick method

unicorn1.onclick = clickUnicorn
unicorn2.onclick = clickUnicorn
unicorn3.onclick = clickUnicorn

// Identify which frame was clicked - using click event object property 'target'
// For each frame:
// On each click, change image to next inflation level (0-3) = 3 clicks.
// Use concatentation to change the .png name to match level of inflation
// On 4th click, create an alert "Unicorn 1-2-3 says thank you!".
// What happens on 5+ clicks?

function clickUnicorn(e) {
  let whichUnicorn = e.target

  // target shows us which element has been clicked

  if (whichUnicorn.id == 'uni1') {
    inflationLevel1++
    if (inflationLevel1 === 4) {
      // if the unicorn is clicked again, the inflation level will be reset at 3 so that the image doesn't disappear
      // as there is not image-4.png etc.
      // this gets stuck in a loop if you keep clicking - between image-3 and the alert, but don't think people would keep clicking aimlessly.
      inflationLevel1 = 3
      alert('Unicorn 1 says thank you!')
      // an alert when fully inflated
    }
    whichUnicorn.src = './images/unicorn-' + inflationLevel1 + '.png'
    // concatenation used to change the image path and 'inflate the unicorn'
  }

  // copy paste for the other two unicorns

  if (whichUnicorn.id == 'uni2') {
    inflationLevel2++
    if (inflationLevel2 === 4) {
      inflationLevel2 = 3
      alert('Unicorn 2 says thank you!')
    }
    whichUnicorn.src = './images/unicorn-' + inflationLevel2 + '.png'
  }

  if (whichUnicorn.id == 'uni3') {
    inflationLevel3++
    if (inflationLevel3 === 4) {
      inflationLevel3 = 3
      alert('Unicorn 3 says thank you!')
    }
    whichUnicorn.src = './images/unicorn-' + inflationLevel3 + '.png'
  }
}
