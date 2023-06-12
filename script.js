const form = document.querySelector('form');
const resultado = document.querySelector('#resultado');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const cantidad = parseFloat(document.querySelector('#cantidad').value);
    const monedaOrigen = document.querySelector('#monedaOrigen').value;
    const monedaDestino = document.querySelector('#monedaDestino').value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${monedaOrigen}`)
        .then(res => res.json())
        .then(data => {
            const tipoCambio = data.rates[monedaDestino];
            const resultadoFinal = cantidad * tipoCambio;
            resultado.innerHTML = `${cantidad} ${monedaOrigen} son ${resultadoFinal.toFixed(2)} ${monedaDestino}`;
        })
        .catch(err => console.log(err));
});
