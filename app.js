// number and price update function 
function updateNumber(product, price, add) {
    const phoneNumber = document.getElementById(product + '-number');
    let phoneNumberText = phoneNumber.value;
    if (add == true) {
        phoneNumberText = parseInt(phoneNumberText) + 1;
    }
    else if (phoneNumberText > 0) {
        phoneNumberText = parseInt(phoneNumberText) - 1;
    }
    phoneNumber.value = phoneNumberText;
    const phonePrice = document.getElementById(product + '-price');
    phonePrice.innerText = phoneNumberText * price;
}
// phone plus item 
document.getElementById('phone-plus').addEventListener('click', function () {
    updateNumber('phone', 1220, true);
})
// phone minus item 
document.getElementById('phone-minus').addEventListener('click', function () {
    updateNumber('phone', 1220, false)
})
// case plus item 
document.getElementById('casing-plus').addEventListener('click', function () {
    updateNumber('casing', 60, true)
})
// casing minus item 
document.getElementById('casing-minus').addEventListener('click', function () {
    updateNumber('casing', 60, false)
})
