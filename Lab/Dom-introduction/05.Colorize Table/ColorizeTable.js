function colorize() {
    return Array.from(document.querySelectorAll('tr:nth-child(even)')).map(e => e.style.background = 'teal');
}