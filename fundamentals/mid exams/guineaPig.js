function guineaPig(input) {
    let [food, hay, cover, weight] = input.map(Number);
    let runOut = false;

    let foodGr = food * 1000;
    let hayGr = hay * 1000;
    let coverGr = cover * 1000;
    let weightGr = weight * 1000;

    for (let i = 1; i <= 30; i++) {
        foodGr -= 300;

        if (i % 2 === 0) {
            hayGr -= 0.05 * foodGr;
        }

        if (i % 3 === 0) {
            coverGr -= 1 / 3 * weightGr;
        }

        if (foodGr <= 0 || hayGr <= 0 || coverGr <= 0) {
            runOut = true;
            break;
        }
    }

    if (runOut) {
        console.log("Merry must go to the pet store!");
    } else {
        console.log(`Everything is fine! Puppy is happy! Food: ${(foodGr / 1000).toFixed(2)}, Hay: ${(hayGr / 1000).toFixed(2)}, Cover: ${(coverGr / 1000).toFixed(2)}.`);
    }
}

guineaPig((["10",
    "5",
    "5.2",
    "1"])
);