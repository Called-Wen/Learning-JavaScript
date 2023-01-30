


const list = [
    "feijao",
    "arroz",
    "macarrao",
    "leite"
];

list[list.length] = "Soupa";
console.log(list[4]);

// Aumentar dados
list.push("Batata");
console.log(list[list.length-1]);
console.log(list);

// Saber se é uma matriz
console.log(Array.isArray(list))