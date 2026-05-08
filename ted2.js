const prompt = require("prompt-sync")();

let maior = 1;
let menor = 5;
let soma_m = 0;
let cont_m = 0;

let cont_f = 0;

for (let i = 0; i < 15; i++) {

    let altura = parseFloat(prompt("Digite a altura: "));
    let genero = prompt("Digite o genero (M/F): ");

    if (altura > maior) {
        maior = altura;
    }

    if (altura < menor) {
        menor = altura;
    }

    if (genero == "M" || genero == "m") {
        soma_m = soma_m + altura;
        cont_m = cont_m + 1;
    } else {
        cont_f = cont_f + 1;
    }
}

let media_m;

if (cont_m > 0) {
    media_m = soma_m / cont_m;
} else {
    media_m = 0;
}

console.log("Maior altura:", maior);
console.log("Menor altura:", menor);
console.log("Media masculino:", media_m);
console.log("Quantidade feminino:", cont_f);