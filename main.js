//make an array with:rock,paper,scissors
//user choice needs to initialize random index on array
//show result under computer
//whatever is clicked shows under user 

var rock = document.getElementById('rock')
var paper = document.getElementById('paper')
var scissor = document.getElementById('scissor')
var playerChoice = document.getElementById('user')
var computerChoice = document.getElementById('comp')
var options = [ 'rock', 'paper', 'scissor' ]
var random = ''
// computerChoice.innerHTML = random 


rock.addEventListener('click', function() {
  playerChoice.innerHTML = 'rock'
  random = options[Math.floor(Math.random() * options.length)]
  computerChoice.innerHTML = random 
})

paper.addEventListener('click', function() {
  playerChoice.innerHTML = 'paper'
  random = options[Math.floor(Math.random() * options.length)]
  computerChoice.innerHTML = random 
})

scissor.addEventListener('click', function() {
  playerChoice.innerHTML = 'scissors'
  random = options[Math.floor(Math.random() * options.length)]
  computerChoice.innerHTML = random 
})

