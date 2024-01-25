/*
Tipos primitivos (imutáveis): string, number, boolen, undefined, null (bigint, symbol) - valor - copiado

Valores por referência (mutável) - array, object, function - passados por referência, mesmo valor na memória
*/

let a = [1, 2, 3];
let b = [...a];
let c = b;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push('Luis');
console.log(a, c);


const d = {
    nome: 'Michael',
    sobrenome: 'Padilha'
}

const e = d;

e.nome = 'Juliano';
console.log(d);
console.log(e);