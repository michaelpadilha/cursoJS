let ustring = "Um \"texto\"";

//               01234567
let umaString = "Um texto";

console.log(umaString[4]);
console.log(umaString.charAt(4));

console.log(umaString.indexOf('texto'));
console.log(umaString.indexOf('o', 3));
console.log(umaString.lastIndexOf('texto'));

console.log(umaString.replace('Um', 'Outra'));

let outraString = 'O rato roeu a roupa do rei de roma';

console.log(outraString.replace(/r/g, 'R'));

console.log(outraString.length);

console.log(outraString.slice(2, 6));
console.log(outraString.slice(-4));
console.log(outraString.slice(-4, -1));

console.log(outraString.split(' ', 2));

console.log(outraString.toUpperCase());