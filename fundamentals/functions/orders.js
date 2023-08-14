function orders(product, quantity){
    let priceForProduct = 0
    let totalPrice = 0;

    switch (product){
        case 'coffee': priceForProduct = 1.5; break;
        case 'water': priceForProduct = 1; break;
        case 'coke': priceForProduct = 1.4; break;
        case 'snacks': priceForProduct = 2; break;
    }

    console.log((priceForProduct * quantity).toFixed(2));
}

orders('coffee', 5);