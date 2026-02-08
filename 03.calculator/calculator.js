function add(a, b){

    if(typeof a !== 'number' || typeof b !== 'number'){
        throw TypeError("Expects a number")
    }

    return a + b;
}


function subtract(a, b){

    if(typeof a !== 'number' || typeof b !== 'number'){
        throw TypeError("Expects a number")
    }

    return a - b;
}


function multiply(a, b){

    if(typeof a !== 'number' || typeof b !== 'number'){
        throw TypeError("Expects a number")
    }

    return a * b;
}

function divide(a, b){

    if(typeof a !== 'number' || typeof b !== 'number'){
        throw TypeError("Expects a number")
    }

    return a / b;
}

export { add, subtract, multiply, divide }