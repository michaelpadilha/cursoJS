/* 
   Operadores aritméticos:
   + Adição / concatenação
   - Subtração
   / Divisão
   * Multiplicação
   ** Potenciação
   % Resto de divisão
*/ 

const num1 = 5;
const num2 = 2;
const num3 = 10;
console.log(num1 + num2 * num3);

/* 
   Ordem de prescedência:
   ()
   **
   * / % -> o que vier primeiro
   + -
*/

let contador = 1;
contador++; // soma depois
++contador; // soma antes
console.log(contador);

let contador2 = 10;
contador2--;
--contador2;
console.log(contador2);

/*
    Incremento = ++
    Decremento = --
 */

const passo = 2;
let contador3 = 0;

contador3 = contador3 + passo;
console.log(contador3);

contador3 += passo;
console.log(contador3);

/*
   Operadores de atribuição:
   +=
   -=
   *=
   /=
   **=
   %=
*/

const numero1 = 10;
const numero2 = 'Michael';
console.log(numero1 * numero2);
// NaN -> Not a number

const numero3 = 10;
const numero4 = Number('5');
console.log(numero3 + numero4);

// Converter string em number -> parseInt (inteiro), parseFloat (decimais), Number (os dois)