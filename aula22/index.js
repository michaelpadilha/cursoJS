/*
Operados Lógicos

&& -> AND -> E -> Todas as expressões tem que ser verdadeiras para retornar true

||  -> OR -> OU -> 

! -> NOT -> NÃO

*/


const expressaoAnd = true && true && true;
console.log(expressaoAnd);

const expressaoOr = true || false;
console.log(expressaoOr);

console.log(!false);

const usuario = 'Michael';
const senha = '123456'
const vaiLogar = usuario === 'Michael' && senha === '123456';
console.log(vaiLogar);