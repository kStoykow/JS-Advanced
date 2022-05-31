function editElement(ref, match, replace) {
    let pattern = new RegExp(match, 'g');
    return ref.textContent = ref.textContent.replace(pattern, replace);
}