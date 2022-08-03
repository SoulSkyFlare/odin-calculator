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
        case 'add':
            return addition(a,b);
        case 'subtract':
            return subtraction(a,b)
        case 'multiply':
            return multiplication(a,b)
        case 'divide':
            return division(a,b)
    }
}