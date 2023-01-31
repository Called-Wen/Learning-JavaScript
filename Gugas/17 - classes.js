


const carro = {
    marca : "Fiat",
    modelo: "uno",
    ano: 2002
}


class Carro{
    constructor(marca,modelo,ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano =ano;
    }
}

const uno = new Carro("Fiat","Uno",2009);
console.log(uno);