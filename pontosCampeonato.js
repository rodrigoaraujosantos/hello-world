const resultados = ["V", "E", "V", "E"];
let pontos = 0;
for (let resultado of resultados){
  if(resultado === "V"){
    pontos += 3;
  } else if (resultado === "E"){
    pontos += 1;
  } else if (resultado === "D"){
    pontos += 0;
  }
}
console.log(pontos);