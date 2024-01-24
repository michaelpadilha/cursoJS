/* 
function criaPessoa (nome,sobrenome,idade) {
    return{nome, sobrenome, idade}
};

const pessoa1 = criaPessoa('Michael','Padilha',27);
const pessoa2 = criaPessoa('Cynthia','Rafaela',26);
const pessoa3 = criaPessoa('Mariana','Padilha',5);

console.log(pessoa1.nome, pessoa3.nome);
*/

const pessoa1 = {
    nome: 'Michael',
    sobrenome: 'Miranda',
    idade: 27,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi ...`);
        },

    incrementaIdade() {
        this.idade++;
        console.log(`minha idade ${this.idade}`);
        }
}


pessoa1.fala();
pessoa1.incrementaIdade();