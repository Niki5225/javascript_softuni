function editElement(ref, match, replaceString) {
    let text = ref.textContent;
    let pattern = new RegExp(match, 'gm');
    let result = text.replace(pattern, replaceString);
    ref.textContent = result;
}