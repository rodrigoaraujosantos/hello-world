const precos = [100, 100, 500, 300, 100];
let totalPagar;
let total = 0;
let maior = 0;
let menor;

for (let preco of precos){
  if (preco > maior){
    maior = preco;
    menor = maior;
  }
}
if (precos.length >= 5){
  for (let preco of precos){
    if (preco < menor){
      menor = preco;
    }
    total += preco;
    totalPagar = total - menor;
  }
  console.log(totalPagar);
} else if (precos.length < 5) {
  for (let preco of precos){
    total += preco;
  }
  console.log(total);
}

