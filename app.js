// Retrieving DOM Elements.

const container = document.querySelector('.container');
const text = document.querySelector('#text');
const circle = document.querySelector('.circle');

// Specifying total time duration for each stage of the cycle.

// 7.5 seconds

const totalTime = 7500;

// 3 seconds

const breatheTime = 3000;

// 1.5 seconds

const holdTime = 1500;

// Defining function with relevant styling and assigning class names to activate CSS animations as shown on the stylesheet with '@keyframes' as well as changing relevant colours according to each stage.

function breatheAnimation() {

    text.innerHTML = 'Breathe in';
    text.style.color = '#fff';
    text.style.fontSize = '1.5rem';
    container.className = 'container grow';
    circle.style.backgroundColor = '#CB997E';

    setTimeout(() => {
        text.innerText = 'Hold';
        text.style.color = '#555';
        text.style.fontSize = '2rem';
        circle.style.backgroundColor = '#FFE8D6';

        setTimeout(() => {
            text.innerText = 'Breathe out';
            text.style.color = '#fff';
            text.style.fontSize = '1.5rem';
            container.className = 'container shrink';
            circle.style.backgroundColor = '#A5A58D';
        }, holdTime) 

    }, breatheTime)
}

breatheAnimation();

// The 'setInterval' method takes in the 'breatheAnimation' function as an argument as well as the 'totalTime' variable. 

setInterval(breatheAnimation, totalTime);