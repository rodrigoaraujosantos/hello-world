const palavras = ["aveia", "manha", "ave"];
const primeiraLetra = "a";
const segundaLetra = "v";

let nenhuma = false;
let duasLetras = primeiraLetra + segundaLetra;


for (let palavra of palavras){
  if(duasLetras === (palavra[0] + palavra[1])){
    nenhuma = true;
    console.log(palavra);
  }
}
if (!nenhuma){
  console.log("NENHUMA");
}






