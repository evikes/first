'use strict'

const hiboxObject = document.getElementById('hibox');
const plusObject = document.getElementById('plus');
const minusObject = document.getElementById('minus');
const h1Object = document.querySelector('h1');


function fontSizeDisplay(){
    const size = getComputedStyle(hiboxObject).fontSize;
    h1Object.textContent = size;
}

function plus5px(){
    const boxStyle = getComputedStyle(hiboxObject);
    const hiSize = parseFloat(boxStyle.fontSize);

    if(hiSize < 50){
        hiboxObject.style.fontSize = (hiSize + 5) + 'px';
        fontSizeDisplay();
    }
}

function minus5px(){
    const boxStyle = getComputedStyle(hiboxObject);
    const hiSize = parseFloat(boxStyle.fontSize);

    if(hiSize > 10){
        hiboxObject.style.fontSize = (hiSize - 5) + 'px';
        fontSizeDisplay();
    }
}

plusObject.addEventListener('click', plus5px);
minusObject.addEventListener('click', minus5px);

