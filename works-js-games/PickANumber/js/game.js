var lowNumber = 0
var highNumber = 100
var medNumber = (highNumber + lowNumber) / 2
var guessesLeft = Math.round(Math.log2(highNumber))

function nextGuess() {
  medNumber = (highNumber + lowNumber) / 2
  document.getElementById('mytextbox1').innerHTML = 'Is Your Number ' + Math.round(medNumber) + '?'
  guessesLeft = guessesLeft - 1
}

function menu() {
    window.location.replace("index.html")
}

nextGuess()

document.getElementById('lower').onclick = function() {
  if(guessesLeft > 0) {  
    highNumber = medNumber
    nextGuess()
  } else {
    document.getElementById('mytextbox1').innerHTML = 'You made an error.'
    setTimeout(menu, 3000);
  }
}

document.getElementById('correct').onclick = function() {
  document.getElementById('mytextbox1').innerHTML = 'I got it with ' + guessesLeft + ' Guesses Left!'
  setTimeout(menu, 3000);
}
document.getElementById('higher').onclick = function() {
  if(guessesLeft > 0) {  
    lowNumber = medNumber
    nextGuess()
  } else {
    document.getElementById('mytextbox1').innerHTML = 'You made an error.'
    setTimeout(menu, 3000);
  }
}
