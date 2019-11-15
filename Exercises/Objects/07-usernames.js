function solve(data) {
    const lengthOrAlphabetical = (a, b) => a.length - b.length || a.localeCompare(b);
    return [...new Set(data)
    ].sort(lengthOrAlphabetical)
        .join('\n');
}

console.log(
    solve(['Ashton',
        'Kutcher',
        'Ariel',
        'Lilly',
        'Ariel',
        'Keyden',
        'Aizen',
        'Billy',
        'Braston']
    )
);