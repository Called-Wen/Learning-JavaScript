
class Carro{
    constructor(marca, modelo, ano, cor){
        this.marca = marca;

        this.modelo = modelo;

        this.ano = ano;

        this.cor = cor;

    }
    buzina(){
        return this.modelo+" Buzinouuuuu!"
    }

}

const uno = new Carro("Ford", "Ranger",2022,"Cinza");

const gol = new Carro("VW","Golf",1999,"Preto");

console.log(gol);

console.log(gol.modelo);

console.log(uno.buzina());


const carro = {
    marca: "Mazda",
    modelo: "BT-50",
    ano: 2022,
    cor: "cinza"
}