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

let displayNumber = 0;
const display=document.getElementById('display');
display.textContent=displayNumber;
const nums=document.querySelectorAll('.num');
nums.forEach(item => { 
    item.addEventListener('click', e =>{
        console.log(e.target.innerText)
        displayNumber = displayNumber == 0 ? e.target.innerText.toString() : displayNumber+e.target.innerText.toString();
        display.textContent=displayNumber;
        console.log(displayNumber)
    }
    )})
    const clear=document.querySelector('.clear');
    clear.addEventListener('click', () =>{
        displayNumber = 0;
        display.textContent=displayNumber;
    })