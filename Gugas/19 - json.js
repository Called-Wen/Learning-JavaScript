

//JSON.parse() -  converte texto no padrao JSON em objectos
//JSON.stringify() - converte objectos em texto no padrao JSON

//Para colocar objectos dentro da pagina html temos que usar JSON uma vez que apenas linguagens de programacao conseguem ler objectos.
const carro = {
    marca:"Fiat",
    modelo:"Uno",
    cilindro: ["1.6","2.0","1.8"]
};


//converte objectos em texto no padrao JSON
let texto = JSON.stringify(carro)
document.getElementById('area').innerHTML = texto;


//converte texto no padrao JSON em objectos
let obj = JSON.parse(texto)
console.log(obj.modelo)

console.log(obj.cilindro[2])