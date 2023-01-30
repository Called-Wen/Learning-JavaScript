const lista = ["arroz", "feijão", "macarrão", "leite"];

alert(lista[2]); //macarrão

const list = [];

list[2]="macarrão";

alert(lista[2]); //macarrão

const lis = new Array("arroz", "feijão", "macarrão", "leite");

let x = lista[3];
console.log(x); //leite


const pessoa = ["wen", "Mau", 23];

const Pessoa = {nome:"wen", apelido:"Mau", idade: 23};

Pessoa.nome;//objecto
pessoa[0]; //array

pessoa.push("Mz");//add uma nova propriedade

pessoa[pessoa.length]="Solteiro";

var isArray = Array.isArray(pessoa);//para saber se é realmente um array

console(isArray);



