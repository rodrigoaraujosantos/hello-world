// function cumprimentar(nome = "Fulano"){
//   console.log(`Olá ${nome}!!`)
// };

// cumprimentar("Rodrigo");

const moto = {
  nome: "Nmax",
  marca: "Yamaha",
  tipo: "Scooter",
  cor: "PretoFosco",
  cadastro: function () {
    console.log(`A moto ${this.nome} na cor ${this.cor} do tipo ${this.tipo} e marca ${this.marca} deu entrada na oficina..`);
  },
  verificarTipoDaMoto: function () {
    if(this.tipo === "Scooter"){
      return "Moto automatica"
    };
  },
  oficinaParaMulheres: function () {
    const tipoMoto = this.verificarTipoDaMoto();
    return `A ${this.nome} na cor ${this.cor} é ${tipoMoto}`
  }
};

console.log(moto.verificarTipoDaMoto());
console.log(moto.oficinaParaMulheres());






