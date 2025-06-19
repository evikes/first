'use strict';

const bodyObject =document.body;
const n1Object = document.getElementById('n1');
const n2Object = document.getElementById('n2');
const opObject = document.getElementById('op');
const calculateObject = document.getElementById('calculate');
const resultSpan = document.querySelector('span.myBold');

function CalculateResult () {
    const n1 = Number(n1Object.value);
    const n2 = Number(n2Object.value);
    const op = opObject.value;

    let result;
    
    if( isNaN(n1) || isNaN(n2) ){
        result='Nan'
    }
    else{
        if(op == 'p'){
            result = n1+n2;
        }
        else if(op == 'm'){
            result = n1 -n2;
        }
        else if(op == 't'){
            result = n1*n2;
        }
        else{
            if(n2 == 0)
                result='Infinity'
            else
                result=n1/n2;
        }
}
    resultSpan.innerHTML = result;
}

calculateObject.addEventListener('click', CalculateResult);

