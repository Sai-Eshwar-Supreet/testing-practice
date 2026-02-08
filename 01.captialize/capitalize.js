function capitalize(term){
    if(typeof term !== 'string'){
        throw new TypeError("Expects a string");
    }

    if(term.length === 0) return term;
    if(!term || typeof term !== 'string') return;
    return term[0].toUpperCase() + term.slice(1);
}

export { capitalize }