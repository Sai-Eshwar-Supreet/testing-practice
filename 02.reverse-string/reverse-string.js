function reverseString(string){
    
    if(typeof string !== 'string'){
        throw new TypeError("Expects a string");
    }

    return string
        .split("")
        .reduce((prev, curr) => { return curr + prev }, "")
}

export { reverseString }