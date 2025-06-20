'use strict';

const n1Object = document.getElementById('n1');
const n2Object = document.getElementById('n2');
const rectObject = document.getElementById('rectangle');
const executeObject = document.getElementById('execution');

function changeDimensions(){
    const n1 = Number(n1Object.value);
    const n2 = Number(n2Object.value);
    const rectHeight = getComputedStyle(rectObject).height;

    if(n1>=50 && n1<=200){
        rectObject.style.height = n1;
    }

    if(n2>=50 && n2<=200){
        rectObject.style.width = n2;
    }

}

executeObject.addEventListener('click', changeDimensions);