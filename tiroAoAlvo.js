// const disparos = [0, 50, 90, 80, 100, 80, 40];
const disparos = [0, 10, 80, 70, 100, 90];
let acertos = null;
let eliminado = false;
for(let disparo of disparos){
  if(disparo > 70){
    acertos++;
    if(acertos >= 3){
      eliminado = true;
    }
  }
}
if (!eliminado){
  console.log("ELIMINADO");
} else {
  console.log(acertos);
}
