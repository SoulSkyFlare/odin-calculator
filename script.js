function addition(a,b){
    return a+b;
}

function subtraction(a,b){
    return a-b;
}

function division(a,b){
    if(b==0) return 'neutro';
    else{
       return Math.round((a/b) * (10**10)) / (10**10);
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
            return subtraction(a,b);
        case 'x':
            return multiplication(a,b);
        case '/':
            return division(a,b);
        }
}

let displayNumber = '0';
const display=document.getElementById('display');
display.textContent=displayNumber;
const nums=document.querySelectorAll('.num');
nums.forEach(item => { 
        item.addEventListener('click', e =>{
            let stringNum=e.target.innerText.toString();
            if (displayNumber == '0' && stringNum != '.'){
                displayNumber = stringNum}
            else displayNumber+=stringNum
            display.textContent=displayNumber;
            }
        )
    }
)
let firstNum = null
let secondNum = null
let operand = null
function allClear(){
    operand=null
    firstNum = null
    secondNum = null
}
const clear=document.querySelector('.clear');
clear.addEventListener('click', () => {
    displayNumber = '0';
    display.textContent=displayNumber;
    allClear();
})

const ops=document.querySelectorAll('.operand');
ops.forEach(item => {
    item.addEventListener('click', e => {
        operand=e.target.innerText.toString()
        firstNum != null ? secondNum = parseFloat(displayNumber) : firstNum = parseFloat(displayNumber);
        if(firstNum && secondNum && operand){
            displayNumber=operate(operand,firstNum,secondNum);
            display.textContent=displayNumber;
            firstNum=displayNumber;
        }
        displayNumber='0';
        console.log (firstNum , secondNum)
        });
    }
)

const equals = document.querySelector('.equals');
equals.addEventListener('click', () => {
    secondNum == null ? secondNum=parseFloat(displayNumber) : "";
    displayNumber=operate(operand,firstNum,secondNum);
    display.textContent=displayNumber;
    console.log(displayNumber , firstNum, secondNum , operand , typeof operand);
    allClear();
    console.log(displayNumber , firstNum, secondNum , operand , typeof operand);
})

