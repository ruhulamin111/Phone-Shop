function updateNumber(itemNumber, add) {
    const phoneNumber = document.getElementById(itemNumber);
    let phoneNumberText = phoneNumber.value;
    if (add == true) {
        phoneNumberText = parseInt(phoneNumberText) + 1;
    }
    else if (phoneNumberText > 0) {
        phoneNumberText = parseInt(phoneNumberText) - 1;
    }
    phoneNumber.value = phoneNumberText;
    const phonePrice = document.getElementById('phone-price');
    phonePrice.innerText = phoneNumberText * 1219;
}

document.getElementById('phone-plus').addEventListener('click', function () {
    updateNumber('phone-number', true);
})

document.getElementById('phone-minus').addEventListener('click', function () {
    updateNumber('phone-number', false)
})

// document.getElementById('casing-plus').addEventListener('click', function () {
//     updateNumber('casing-number', true)
// })

// document.getElementById('casing-minus').addEventListener('click', function () {
//     /*     const casingNumber = document.getElementById('casing-number');
//         const casingNumberText = casingNumber.value;
//         casingNumber.value = parseInt(casingNumberText) - 1; */

//     updateNumber('casing-number', false)
// })
