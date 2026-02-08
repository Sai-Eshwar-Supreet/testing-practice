const TOTAL_ALPHABETS = 26;
const charRanges = [
    {min: 65, max: 90},
    {min: 97, max: 122}
]

function shiftCharacterCode(code, shift){
    for(let range of charRanges){
        if(code >= range.min && code <= range.max){
            let pos = code - range.min;
            pos  = (pos + shift) % TOTAL_ALPHABETS;

            return range.min + pos;
        }
    }

    return code;
}

function caesarCipher(text, shift){
    if(typeof text !== 'string' ){
        throw new TypeError("Expects text of type string");
    }

    if(typeof shift !== 'number' || !Number.isInteger(shift)){
        throw new TypeError("Shift should be an integer");
    }

    return text
        .split("")
        .map(char => String.fromCharCode(shiftCharacterCode(char.charCodeAt(0), shift)))
        .join("");
}

export { caesarCipher }