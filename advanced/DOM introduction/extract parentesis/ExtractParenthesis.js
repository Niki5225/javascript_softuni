function extract(content) {
    let p = document.getElementById(content);
    let text = p.textContent;


    let regex = /\((?<name>[^()]+)\)/gm;
    let result = [...text.matchAll(regex)].map(x => x[1]);
    let str = result.join('; ');

    return str;
}