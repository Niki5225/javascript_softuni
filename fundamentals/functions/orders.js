function orders(product, times) {

    if (product === 'coffee') {
        console.log((1.50 * times).toFixed(2));
    } else if (product === 'water') {
        console.log((1.00 * times).toFixed(2));
    } else if (product === 'coke') {
        console.log((1.40 * times).toFixed(2));
    } else {
        console.log((2.00 * times).toFixed(2));
    }
}

orders('coffee', 5);