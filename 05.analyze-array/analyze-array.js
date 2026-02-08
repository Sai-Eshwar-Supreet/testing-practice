function analyzeArray(arr){
    if(!Array.isArray(arr)){
        throw new TypeError("Expects an array");
    }

    if(arr.some(el => (typeof el !== 'number'))){
        throw new TypeError("Expects a numeric array");
    }

    if(arr.length === 0) return;

    const analysis = {
        average: arr.reduce((sum, val) => (sum + val) , 0) / arr.length, 
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length
    }

    return analysis;
}

export { analyzeArray }