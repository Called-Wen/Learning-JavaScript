
var data = new Date();

let ano = data.getFullYear();

console.log(ano);


let mes = data.getMonth();

const mesesDoAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho","Julho","Agosto","Setembro","Outrubro","Novembro","Dezembro"];

let mesEscrito = mesesDoAno[data.getMonth()];
console.log(mesEscrito);


let diaMes = data.getDate();
console.log(diaMes);

//Pegar hora de 0-23

let hora = data.getHours();
console.log(hora);

//Pegar dia/mes/ano

let dataBR = data.toLocaleString('pt-BT', {dateStyle: 'short'})
console.log();

//pegar valores das datas separados

dayMes = data.getDate();
month = data.getMonth(); //Se quiser que ele saia do jeito correcto +1
year = data.getFullYear();

var dataPadrao= dayMes+" / "+month+" / "+year
console.log(dataPadrao);

function addZero(x){return x<10? '0'+x : ""+x; };

dataPadrao= addZero(dayMes)+" / "+addZero(month)+" / "+addZero(year);

console.log(dataPadrao);




//Comparacao de datas
var hoje = new Date();

var vencimento = new Date(2022, 0, 15);

if (hoje>vencimento){
    console.log("Ainda nao venceu");

}else{
    console.log("Sua conta esta vencida");
}


//Diferecnça entre dias
var dataInicial = new Date();
var dataFinal = new Date(2022,11,31);

var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();

var diferencaDias = Math.ceil(diferencaTempo / (24*60*60*1000))
console.log(diferencaDias+" dias");





