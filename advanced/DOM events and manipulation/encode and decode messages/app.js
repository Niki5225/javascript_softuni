function encodeAndDecodeMessages() {
    let [text1, text2] = document.querySelectorAll('main textarea');
    let [encode, decode] = document.querySelectorAll('main button');

    encode.addEventListener('click', encodeFunc);
    decode.addEventListener('click', decodeFunc);


    function transformText(text, func) {
        return text.split('').map(func).join('');
    }

    function nextChar(char) {
        return String.fromCharCode(char.charCodeAt(0) + 1);
    }

    function previousChar(char) {
        return String.fromCharCode(char.charCodeAt(0) - 1);
    }

    function encodeFunc(event) {
        text2.value = transformText(text1.value, nextChar);
        text1.value = '';

    }

    function decodeFunc(event) {
        text2.value = transformText(text2.value, previousChar);
    }
}