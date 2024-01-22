const nome = prompt('Digite o seu nome completo:');

const nomeSemEspacos = nome.replace(/ /g, '');
const quantidadeLetras = nomeSemEspacos.length;
const letraEscolha = 'l';


document.body.innerHTML = `Seu nome é: ${nome} </br>`;
document.body.innerHTML += `Seu nome tem ${quantidadeLetras} letras </br>`;
document.body.innerHTML += `A segunda letra do seu nome é ${nome[1]} </br>`;
document.body.innerHTML += `Qual o primeiro índice da letra L no seu nome? ${nome.indexOf(letraEscolha)} </br>`;
document.body.innerHTML += `Qual o último índice da letra L no seu nome? ${nome.lastIndexOf(letraEscolha)} </br>`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(-3)} </br>`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')} </br>`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()} </br>`;
document.body.innerHTML += `Seu nome com letras minúsculas ${nome.toLowerCase()}`;