//Os valores de um objecto sao propriedades e os objectos podem ter métodos

let carro = "prado";

const car = { 
    marca: "Prado", 
    modelo: "Prado", 
    ano: 2015, 
    matricula: "ABB-123",
    buzina: function(){
        alert("pimmmmmmmmmmm!")
    },

    importante: function(){
        return "Marca: "+this.marca+" Matricula: "+this.matricula;
    }

};

console.log(carro["marca"]);
console.log(car["ano"]);

console.log(car.buzina())

console.log(car.importante());
