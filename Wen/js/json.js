//JSON(JavaScript Object Notation) é uma forma de converter texto em objecto ou objecto em texto. É lido praticamente por toda linguagem de programação. Existem dois métodos JSON.parse()  texto para objecto e JSON.stringify() objecto para texto

const carro = {
    marca: "Ford",
    modelo: "Ranger",
    ano: 2022,
    motor: ["2.0", "1.6", "1.4", "1.0"]

}

document.getElementById('area').innerHTML = carro;//imprime [Object] [Object]


let texto = JSON.stringify(carro); //para converter objecto para texto


document.getElementById('area').innerHTML = texto;//imprime o correcto
//converteu objeto em texto
console.log(texto.modelo)//isto nao e o correto



let obj = JSON.parse(texto);
//converteu texto em objeto
console.log(obj.modelo);//este e o jeito correto

//imprimir o motor na posição 2
console.log(obj.motor[2]);



//Quando se usa na prática??

const ajax = new XMLHttpRequest(); //Acessar um site da ide de um jeito remoto

ajax.open('Get', 'http://viacep.com.br/ws/01001000/json/');
ajax.send();

ajax.onload = function () {
    document.getElementById('area').innerHTML = this.responseText;
}

//Para trabalhar com o objeto

ajax.onload = function () {
    document.getElementById('area').innerHTML = this.responseText;//imprimi toda informação
    let obj = JSON.parse(this.responseText);
    console.log(obj.ddd);
}


//para usar o botao

function buscarDados() {
    let campo = document.getElementById("cep").value;

    const ajax = new XMLHttpRequest();

    ajax.open('Get', 'http://viacep.com.br/ws/' + 01001000 + '/json/');
    ajax.send();

    ajax.onload = function () {
        // document.getElementById('texto').innerHTML = this.responseText; para imprimir toda informacao
        let obj = JSON.parse(this.responseText);
        console.log(obj.bairro);
        console.log(obj.localicade);
        console.log(obj.uf);
    }

}
