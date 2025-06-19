'use strict';

const tb = document.getElementById('tb');
const lr = document.getElementById('lr');
const box = document.getElementById('box');

function changeTopBottomBorder(){
    const compute = getComputedStyle(box);
    const boxTop = compute.borderTopStyle;

    if(boxTop == 'solid'){
        box.style.borderTop = 'none';
        box.style.borderBottom = 'none';
    }
    else{
        box.style.borderTop = '5px solid black';
        box.style.borderBottom = '5px solid black';
    }
}

function changeLeftRightBorder(){
    const compute = getComputedStyle(box);
    const boxLeft = compute.borderLeftStyle;

    if(boxLeft == 'solid'){
        box.style.borderLeft = 'none';
        box.style.borderRight = 'none';
    }
    else{
        box.style.borderLeft = '5px solid black';
        box.style.borderRight = '5px solid black';
    }
}

tb.addEventListener('click', changeTopBottomBorder);
lr.addEventListener('click', changeLeftRightBorder);