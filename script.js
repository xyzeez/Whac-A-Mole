const grid = document.querySelector('.grid');

( () => {
    for (let i = 0; i < 9; i++) {
        const box = document.createElement('div');
        box.setAttribute('class', 'square');
        box.setAttribute('id', i+1);
        grid.append(box);
    }
})();

const squares = document.querySelectorAll('.square');
squares[Math.floor(Math.random() * 9)].classList.add('mole');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');
let result = 0;
let currentTime = 60;
let hitPosition;
let timerId;

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole');
    })
    let randomSquare = squares[Math.floor(Math.random() * 9)].classList.add('mole');
    hitPosition = randomSquare.id;
}

squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        if (square.id == hitPosition) {
            result++;
            score.innerHTML = result;
            hitPosition = null;
        }
    })
})

function moveMole() {
    timerId = setInterval(randomSquare, 600);
}

moveMole();

function countDown() {
    currentTime--;
    timeLeft.innerHTML = currentTime;
    if (currentTime == 0) {
        clearInterval(countDownTimerId);
        clearInterval(timerId);
    }
}

let countDownTimerId = setInterval(countDown, 1000);