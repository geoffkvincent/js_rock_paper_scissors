




var rock = document.getElementById('rock')
var paper = document.getElementById('paper')
var scissor = document.getElementById('scissor')
var playerChoice = document.getElementById('user')
var computerChoice = document.getElementById('comp')
var result = document.getElementById('result')
var options = [ 'rock', 'paper', 'scissor' ]
var random = ''

rock.addEventListener('click', function() {
  playerChoice.innerHTML = 'rock'
  random = options[Math.floor(Math.random() * options.length)]
  computerChoice.innerHTML = random 
   if (random == 'rock') {
     result.innerHTML = 'TIE'
   } else if (random == 'paper') {
     result.innerHTML = 'LOSER'
   } else if (random == 'scissor') {
     result.innerHTML = 'WINNER!'
   }

})

paper.addEventListener('click', function() {
  playerChoice.innerHTML = 'paper'
  random = options[Math.floor(Math.random() * options.length)]
  computerChoice.innerHTML = random 
  if (random == 'paper') {
    result.innerHTML = 'TIE'
  } else if (random == 'scissor') {
    result.innerHTML = 'LOSER'
  } else if (random == 'rock') {
    result.innerHTML = 'WINNER!'
  }
  
})

scissor.addEventListener('click', function() {
  playerChoice.innerHTML = 'scissors'
  random = options[Math.floor(Math.random() * options.length)]
  computerChoice.innerHTML = random 
  if (random == 'scissor') {
    result.innerHTML = 'TIE'
  } else if (random == 'rock') {
    result.innerHTML = 'LOSER'
  } else if (random == 'paper') {
    result.innerHTML = 'WINNER!'
  }
})