function solve() {
    let buttons = document.getElementsByClassName('add-product');
    let products = new Set();
    let totalPrice = 0;
    let checkout = document.querySelector('.checkout');
    let result = document.querySelector('textarea');

    for (let btn of buttons) {
        btn.addEventListener('click', addProductHandler);
    }

    checkout.addEventListener('click', checkoutHandler);

    function addProductHandler(event){
        let parentDiv = event.target.parentElement.parentElement;
        let productName = parentDiv.querySelector('.product-title').textContent;
        let price = Number(parentDiv.querySelector('.product-line-price').textContent);

        products.add(productName);
        totalPrice += price;

        result.textContent += `Added ${productName} for ${price.toFixed(2)} to the cart.\n`;
    }

    function checkoutHandler(event){
        let arrProducts = Array.from(products.keys());
        for (let btn of buttons) {
            btn.disabled = true;
            checkout.disabled = true;
        }
        result.textContent += `You bought ${arrProducts.join(', ')} for ${totalPrice.toFixed(2)}.`
    }
}