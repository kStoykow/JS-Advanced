function solve(data) {
    const lengthOrAlphabetical = (a, b) => a.length - b.length || a.localeCompare(b);
    
    return data
        .sort(lengthOrAlphabetical)
        .join('\n');
}

console.log(solve(['test', 
'Deny', 
'omen', 
'Default']
));