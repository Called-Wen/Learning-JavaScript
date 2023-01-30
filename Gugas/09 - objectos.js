

const carro = {
    marca: "ford",
    modelo: "KA",
    ano: "2015",
    placa: "ABC-1234",
    buzina: function(){
        alert('Pimmmmm')
    },
    completo:function(){
        return "marca: " + this.marca + " \tplaca: " + this.placa + "\t\tmodelo: " + this.modelo + "\tano: " + this.ano
    }
};

console.log(carro.completo())

