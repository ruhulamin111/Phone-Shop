function updateNumber(itemNumber, add) {
    const phoneNumber = document.getElementById(itemNumber);
    const phoneNumberText = phoneNumber.value;
    if (add == true) {
        phoneNumber.value = parseInt(phoneNumberText) + 1;
    }
    else {
        phoneNumber.value = parseInt(phoneNumberText) - 1;
    }
}

document.getElementById('phone-plus').addEventListener('click', function () {
    /* const phoneNumber = document.getElementById('phone-number');
    const phoneNumberText = phoneNumber.value;
    phoneNumber.value = parseInt(phoneNumberText) + 1; */

    updateNumber('phone-number', true);

    const phonePrice = document.getElementById('phone-price');
    const phonePriceText = phonePrice.innerText;
    phonePrice.innerText = parseFloat(phonePriceText) + 1219;
})

document.getElementById('phone-minus').addEventListener('click', function () {
    /*  const phoneNumber = document.getElementById('phone-number');
     const phoneNumberText = phoneNumber.value;
     phoneNumber.value = parseInt(phoneNumberText) - 1; */

    updateNumber('phone-number', false)

    const phonePrice = document.getElementById('phone-price');
    const phonePriceText = phonePrice.innerText;
    phonePrice.innerText = phonePriceText + 1219;
})

document.getElementById('casing-plus').addEventListener('click', function () {
    /*   const casingNumber = document.getElementById('casing-number');
      const casingNumberText = casingNumber.value;
      casingNumber.value = parseInt(casingNumberText) + 1; */

    updateNumber('casing-number', true)

})

document.getElementById('casing-minus').addEventListener('click', function () {
    /*     const casingNumber = document.getElementById('casing-number');
        const casingNumberText = casingNumber.value;
        casingNumber.value = parseInt(casingNumberText) - 1; */

    updateNumber('casing-number', false)
})
