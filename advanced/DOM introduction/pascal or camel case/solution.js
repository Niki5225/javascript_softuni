function solve() {
    function toPascalCase(value) {
        return value.replace(/(\w)(\w*)/g, function (_, firstChar, restOfWord) {
            return firstChar.toUpperCase() + restOfWord.toLowerCase()
        });
    }

    function toCamelCase(value) {
        return value.replace(/[\s_-](\w)/g, function (_, firstChar) {
            return firstChar.toUpperCase();
        });
    }

    let text = document.getElementById('text').value;
    let convention = document.getElementById('naming-convention').value;
    let result = document.getElementById('result');

    switch (convention) {
        case "Camel Case":
            result.textContent = toCamelCase(text);
            return;
        case "Pascal Case":
            result.textContent = toPascalCase(text);
            return;
        default:
            result.textContent = 'Error!'
            return;
    }
}