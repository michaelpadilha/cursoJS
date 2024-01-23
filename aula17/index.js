/** 
 * MODO CLÁSSICO DE DECLARAR UMA FUNCTION
 * 
function soma(x = 1, y = 1) {
    const resultado = x + y;
    return resultado;
}

const resultado = soma (2, 2);
console.log(resultado);
*/

/** const raiz = function (n) {
return n ** 0.5;
};
*/

const raiz = n => n ** 0.5;

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));