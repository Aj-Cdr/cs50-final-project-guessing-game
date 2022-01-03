'use strict'

//random number for the game
let Secret_Number = Math.trunc(Math.random() * 20) + 1
//score
let score = 20
let highScore = 0

//setting the scroe and secret number variables
document.querySelector('.number').textContent = "?"
document.querySelector('.score').textContent = score
console.log("Secret Number " + Secret_Number)

// addEventListner listens for any updates in the webpage
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)
    console.log(typeof (guess), guess)

    //when there is no guess
    if (!guess) {
        document.querySelector('.message').textContent = "⛔ No Number"
    }
    // when the guess = secret number
    else if (guess === Secret_Number) {
        document.querySelector('.message').textContent = "🎉 Correct Number"
        document.querySelector('.number').textContent = Secret_Number
        document.querySelector('body').style.backgroundColor = "#60b347"
        document.querySelector('.number').style.width = "30rem"

        if (score > highScore) {
            highScore = score
            document.querySelector('.highscore').textContent = highScore
        }
    }
    // when guess > secret number
    else if (guess > Secret_Number) {
        // score manipulation
        if (score > 1) {
            score--
            document.querySelector('.score').textContent = score
            document.querySelector('.message').textContent = "👆 Too High"
        } else {
            document.querySelector('.message').textContent = "💀 You Lost The Game"
            score--
            document.querySelector('.score').textContent = score
        }
    }
    // when guess < secret number
    else if (guess < Secret_Number) {
        // score manipulation
        if (score > 1) {
            score--
            document.querySelector('.score').textContent = score
            document.querySelector('.message').textContent = "👇 Too Low"
        } else {
            document.querySelector('.message').textContent = "💀 You Lost The Game"
            score--
            document.querySelector('.score').textContent = score
        }
    }
})

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    Secret_Number = Math.trunc(Math.random() * 20) + 1

    document.querySelector('.message').textContent = "Start guessing..."
    document.querySelector('.number').textContent = "?"
    document.querySelector('.score').textContent = score
    document.querySelector('.guess').value = ""

    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
})