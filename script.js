function addition(a,b){
    return a+b;
}

function subtraction(a,b){
    return a-b;
}

function division(a,b){
    if(b==0) return 'neutro';
    else{
       return Math.round(a/b)
    }
}

function multiplication(a,b){
    return a*b
}

function operate(operation, a,b){
    switch(operation){
        case '+':
            return addition(a,b);
        case '-':
            return subtraction(a,b)
        case '*':
            return multiplication(a,b)
        case '/':
            return division(a,b)
        }
}

let result = 0;
let displayNumber = result == '' ? 0 : result;
const display=document.getElementById('display');
display.textContent=displayNumber;