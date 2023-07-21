const notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100];

let menor = Infinity;
let maior = 0;
let soma = 0;
let contador = -2;

for (let nota of notas) {
    if (nota < menor) {
        menor = nota;
    }

    if (nota > maior) {
        maior = nota
    }

    soma += nota;
    contador++;
}

console.log((soma - (menor + maior)) / contador);


















