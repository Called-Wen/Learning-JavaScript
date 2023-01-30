
const pessoa= ["wen", "Mau", 23, "MZ"];


document.getElementById("texto").innerHTML = pessoa;

document.getElementById("texto").innerHTML = pessoa.join(" + ");//Troca separadores

pessoa.pop();//remove o último item

pessoa.push("Black"); //add um item e um lugar

pessoa.shift();//remove o primeiro item ou usar delete = pessoa[0]; porem a matriz ficara com valor indefenido no 1o lugar

pessoa.unshift("Gostoso") //add item no primeiro lugar

pessoa.splice(1,0,"Mestre");//1o parametro a posicao 2o parametro quantos elementos substituir e por fim o que quer add


const fruta =["Abacate","Maçã","Banana"];

const animal = ["Cão","Avestruz", "Urubu"];

const superLista = fruta.concat(animal); //se fossem mais listas seria fruta.concat(lista, animal, ...)

document.getElementById("texto").innerHTML = superLista;


//Dividir uma lista Slice
const jogadoresS = ["Pau","Iguadala","Noah","Kobe", "Lebron", "Kyrie", "Curry", "Atentokoumpo", "Durant"];
const craquesS = jogadores.slice(3);
//pega os ultimos apartir da posicao 3

const jogadores = ["Pau","Iguadala","Noah","Kobe", "Lebron", "Kyrie", "Curry", "Atentokoumpo", "Durant","Iguadala","Green"];
//pega os ultimos apartir da posicao 3 ate 8

const craques = jogadores.slice(3,8);

document.getElementById("texto").innerHTML = craques;

//Ordenar em ordem alfabetica a-z

const jogOrdaz = jogadores.sort();
document.getElementById("texto").innerHTML = jogOrdaz;

//Ordenar em ordem alfabetica z-a
const jogOrdza = jogadores.sort();
document.getElementById("texto").innerHTML = jogOrdza;


//Ordenar numeros

const numeros = [20,3,79,09,99];

numeros.sort(function(a,b){
    return a-b
});

numeros.sort(function(a,b){
    return b-a
});


//Maior numero bo array
function maiorNumero(array){
    return Math.max.apply(null,array);
}

document.getElementById("texto").innerHTML = maiorNumero(numeros);


//Menor numero bo array
function menorNumero(array){
    return Math.min.apply(null,array);
}


//numeros filtrados maiores que um numero

function filtragem(value, index){
    return  value > 20;
}

const numerorM20 = numeros.filter(filtragem);






