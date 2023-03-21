'use strict';

console.log('it works!');

const activateButton = (event) => {
    event.target.classList.add('btn-smiley--selected')
}

// 1. možnost

/*
const btn2 = document.getElementById('smiley2');
const btn3 = document.getElementById('smiley3');

btn2.addEventListener('click' , activateButton);
btn3.addEventListener('click' , activateButton);
*/

// 2. možnost

const buttons = document.getElementsByTagName('button');

for(var i=0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', activateButton);
}



