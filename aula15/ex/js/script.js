const numeroEscolhido = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

texto.innerHTML = '';
numeroTitulo.innerHTML += numeroEscolhido;
texto.innerHTML = `<p>Raiz quadrada do seu número <strong> ${numeroEscolhido ** 0.5} <strong></p>`;
texto.innerHTML += `<p>${numeroEscolhido} é inteiro? <strong> ${Number.isInteger(numeroEscolhido)} </strong></p>`;
texto.innerHTML += `<p>Esse número é NaN? <strong> ${Number.isNaN(numeroEscolhido)} </strong></p>`;
texto.innerHTML += `<p>Seu número arredondado para baixo: <strong> ${Math.floor(numeroEscolhido)} </strong></p>`;
texto.innerHTML += `<p>Seu número arredondado para cima: <strong> ${Math.ceil(numeroEscolhido)} </strong></p>`;
texto.innerHTML += `<p>Seu número com duas casas decimais: <strong> ${numeroEscolhido.toFixed(2)} </strong></p>`;