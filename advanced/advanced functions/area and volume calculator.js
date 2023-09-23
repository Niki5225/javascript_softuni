function solve(area, vol, input) {
    const elements = JSON.parse(input);
    let result = [];

    for (const element of elements) {
        let areaValue = area.call(element);
        let volume = vol.call(element);
        result.push({area: areaValue, volume});
    }
    return result;
}

function vol() {
    return Math.abs(this.x * this.y * this.z);
}

function area() {
    return Math.abs(this.x * this.y);
}

let a = solve(area, vol, `[
{"x":"1","y":"2","z":"10"},
{"x":"7","y":"7","z":"10"},
{"x":"5","y":"2","z":"10"}
]`);

console.log(a);