function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        
        const cadastro = criaPessoa(nome.value, sobrenome.value, peso.value, altura.value);
        pessoas.push(cadastro);
        console.log(pessoas);
        resultado.innerHTML += (`<p>${cadastro.nome} ${cadastro.sobrenome} ${cadastro.peso} ${cadastro.altura}</p>`);
    }

    function criaPessoa (nome, sobrenome, peso, altura) {
        return {nome, sobrenome, peso, altura}
    }

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();