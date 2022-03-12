function apresentar(nome) {
    return `Meu nome é ${nome}.`
}

// Arrow Function
const apresentarArrow = nome => `Meu nome é ${nome}.`;
const soma = (num1, num2) => num1 + num2;

// Arrow function linhas > 1

const somaNumerosPequenos = (num1, num2) => {
    if (num1 || num2 >10) {
        return 'somente números pequenos'
    } else {
        return num1 + num2;
    }
}

/* quando utilizar cada tipo

* Hoisting: Arrow Functions se comporta como expressão

* Arrow Function: rapido e curto;
    vantagens: mexer com objetos
*/
