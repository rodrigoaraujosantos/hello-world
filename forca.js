const palavra = "abelha";
let palpite = "a";

let contador = 0;

for (let letra of palavra){
  if (letra === palpite){
    contador++;
  }
}
console.log(contador);