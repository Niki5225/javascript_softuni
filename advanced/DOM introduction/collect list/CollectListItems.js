function extractText() {
    let liTags = document.getElementsByTagName("li");
    let liArrayOfText = Array.from(liTags).map(x => x.textContent);
    let text = document.getElementById('result');
    text.value = liArrayOfText.join('\n');
}