let input = "!acade@m#y$CUB%&*OS()";

let caracterEspecial = "!@#$%&*()";

let purificado = "";

for (let word of input){
  if (caracterEspecial.includes(word)){
    // nao faco nada
  } else {
    purificado += word;
  }
  
}
console.log(purificado);

