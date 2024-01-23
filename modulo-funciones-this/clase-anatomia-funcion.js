function calculateDiscount(price, discountPercentage) {
    let total = price - (discountPercentage * price) / 100;
    return total;
}

console.log(calcularDescuento(100, 30));
