// number and price update function 
function updateProduct(product, price, add) {
    const productNumber = document.getElementById(product + '-number');
    let productUpdate = productNumber.value;
    if (add == true) {
        productUpdate = parseInt(productUpdate) + 1;
    }
    else if (productUpdate > 0) {
        productUpdate = parseInt(productUpdate) - 1;
    }
    productNumber.value = productUpdate;
    const productPrice = document.getElementById(product + '-price');
    productPrice.innerText = productUpdate * price;

    calculate();
}
// calculation funtion 

function calculate() {
    const phoneInput = document.getElementById('phone-number').value;
    const phoneTotal = parseInt(phoneInput) * 1220;
    const caseInput = document.getElementById('casing-number').value;
    const caseTotal = parseInt(caseInput) * 60;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalAmount = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = totalAmount;
}

// phone plus item 
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProduct('phone', 1220, true);
})
// phone minus item 
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProduct('phone', 1220, false)
})
// case plus item 
document.getElementById('casing-plus').addEventListener('click', function () {
    updateProduct('casing', 60, true)
})
// casing minus item 
document.getElementById('casing-minus').addEventListener('click', function () {
    updateProduct('casing', 60, false)
})

