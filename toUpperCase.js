const nome = "rodrigo araujo santos"

const array = nome.split(" ")

let nomeFormated = "";

for(let item of array){
  let primeiraLetra = item.slice(0, 1);
  let restante = item.slice(1);
  nomeFormated += primeiraLetra.toUpperCase() + restante + " ";
}
console.log(nomeFormated.trim());

