const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const btn = document.querySelector('#calculate');
const pResult = document.querySelector('#result');


btn.addEventListener('click', calculatePriceWidthDiscount);

function calculatePriceWidthDiscount() {
    // (P * (100 - D)) / 100

    const price = inputPrice.value;
    const discount = inputDiscount.value;

    const newPrice = (price * (100 - discount)) / 100;

    pResult.innerText = 'El nuevo precio con descuento es $' + newPrice;
}