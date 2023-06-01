function guineaPig(array) {
    let quantityFoodGrams = Number(array.shift()) * 1000;
    let quantityHayGrams = Number(array.shift()) * 1000;
    let quantityCoverGrams = Number(array.shift()) * 1000;
    let pigWeightGrams = Number(array.shift()) * 1000;

    let currentDay = 1;

    let needMoreSupplies = false;

    while (currentDay <= 30) {
        quantityFoodGrams -= 300
        if (currentDay % 2 === 0) {
            let dailyHay = 0.05 * quantityFoodGrams;
            quantityHayGrams -= dailyHay;

        }
        if (currentDay % 3 === 0) {
            let dailyCover = 1 / 3 * pigWeightGrams;
            quantityCoverGrams -= dailyCover;
        }

        if (quantityCoverGrams <= 0 || quantityHayGrams <= 0 || quantityFoodGrams <= 0) {
            needMoreSupplies = true;
            break;
        }

        currentDay += 1;
    }

    if (needMoreSupplies) {
        console.log("Merry must go to the pet store!")
    } else {
        let quantityFoodKg = quantityFoodGrams / 1000;
        let quantityHayKg = quantityHayGrams / 1000;
        let quantityCoverKg = quantityCoverGrams / 1000;
        console.log(`Everything is fine! Puppy is happy! Food: ${quantityFoodKg.toFixed(2)}, Hay: ${quantityHayKg.toFixed(2)}, Cover: ${quantityCoverKg.toFixed(2)}.`);
    }
}
guineaPig((["10",
    "5",
    "5.2",
    "1"])
);