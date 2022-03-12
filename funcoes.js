// let x = '';

// console.log(x);

// x = 'oi';

/*
DECLARAÇÃO DE FUNÇÃO

function nome(paramentro) {
    o que ela faz;
}
*/

// 1º) declaração da função
function imprimeTexto(texto) {
    console.log(texto);
}

//2º Chamar a Função (ass needed)
imprimeTexto(soma());
imprimeTexto('Outro texto');

// 3 Formas de escrever funções!

function soma () {
    return 2 + 2 
    // o que vem depois do return não sera executado!!!
}

// console.log(soma());