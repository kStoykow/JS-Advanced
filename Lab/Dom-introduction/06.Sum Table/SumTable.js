function sumTable() {
    let table = document.getElementsByTagName('table')[0];
    let prices = Array.from(table.querySelectorAll('td:nth-child(even)')).slice(0, -1);
    return document.getElementById('sum').textContent = prices.reduce((a, b) => a + Number(b.textContent), 0);
}