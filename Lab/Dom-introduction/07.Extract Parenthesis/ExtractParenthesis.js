function extract(id) {
    return document.getElementById(id)
        .textContent.match(/\(.*?\)/g)
        .map(e => e.replace(/(\(|\))/g, ''))
        .join('; ');
}