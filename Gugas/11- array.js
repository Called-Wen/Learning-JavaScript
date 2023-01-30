


const list = [
    "feijao",
    "arroz",
    "macarrao",
    "leite"
];

list[list.length] = "Sopa";
console.log(list[4]);

// Aumentar dados
console.log("Aumentar dados");
list.push("Batata");
console.log(list[list.length - 1]);
console.log("");
console.log("");


// Saber se é uma matriz
console.log(Array.isArray(list))

// metodos array
//metodo join... trocar separador
console.log(list.join(" - "))


// Remover ultimo elemento da matriz
console.log("");
console.log("");
console.log("Remover ultimo elemento da matriz");
list.pop();
console.log(list.join(" - "))


//Remover primeiro item
console.log("");
console.log("");
console.log("Remover primeiro item");
list.shift();
console.log(list.join(" - "))


//Adicionar item na primeira posicao
console.log("");
console.log("");
console.log("Adicionar item na primeira posicao");
list.unshift("Chivambo");
console.log(list.join(" - "));


//Colocar items dentro de uma posicao escolhida
console.log("");
console.log("");
console.log("items dentro de uma posicao escolhida");
list.splice(2, 0, "Item 1", "Item 2", "Item 3");
console.log(list.join(" - "));

//Juntar Matrizes
const lista1 = ["Arroz", "feijao", "camarrao", "carne"];
const lista2 = ["Suco", "Refrigerante", "Ceres"];
const lista3 = ["Salgado"];

const superLista = lista1.concat(lista2, lista3);
console.log("JUncao de listas...");
console.log(superLista);


//Dividir lista do meio
const jogadores = [
    "Mbappe",
    "Halland",
    "Coutinho",
    "Lewandowiski",
    "Benzema",
    "Neymar",
    "Messi",
    "Ronaldo",
    "Suarez",
    "Lautaro",
    "Higuain",
    "Marcelo",
    "Nacho",
    "Maguire"
];
console.log("Jogadores Comuns");
console.log(jogadores);
const craques = jogadores.slice(5, 9);
console.log("Craques");
console.log(craques);


//Ordem alphabetica
console.log("Ordem Alphabetica");
console.log(jogadores.sort());

//Em ordem contraria NB: DEVEM ESTAR NA ORDEM ALFABETICA PRIMEIRO
console.log("Ordem Inversa");
console.log(jogadores.reverse());


//Ordem numerica
console.log("Ordem Alphabetica")
console.log("");
console.log("");
console.log("");
console.log("");
console.log("Ordem Normal");
const num = [40, 100, 1, 5, 25, 10];
num.sort(function (a, b) { return a - b })
console.log("");
console.log("Ordem Crescente");
console.log(num);
console.log("");


num.sort(function (a, b) { return b - a })
console.log("Ordem Decrescente");
console.log(num);


function maiorNumero(array) {
    return Math.max.apply(null, array);
}
console.log("MAior Numero");
console.log(maiorNumero(num));

//Numeros maiores que 20
console.log("Numeros maiores que 20");
const maior20 = num.filter(filtragem);
console.log(maior20);



function filtragem(value, index, array) {
    return value > 20;
}