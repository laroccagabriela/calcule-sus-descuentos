const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const btn = document.querySelector('#calculate');
const pResult = document.querySelector('#result');


btn.addEventListener('click', calculatePriceWidthDiscount);

function calculatePriceWidthDiscount() {
    // (P * (100 - D)) / 100

    const price = Number(inputPrice.value);
    const discount = Number(inputDiscount.value);

    if (!price || !discount) {
        pResult.innerText = 'Por favor, llena el formulario';
        return;
    }
    const newPrice = (price * (100 - discount)) / 100;

    pResult.innerText = 'El nuevo precio con descuento es $' + newPrice;
}