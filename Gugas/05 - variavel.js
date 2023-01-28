



/*

No javascript temos 3 palavras chaves para declarar variaveis
-> var - funciona em todo escpo
-> let - funciona no escopo defenido
-> const - nunca pode ser alterado
*/

var a = 2;
var b = 5;
var c = a * b;
console.log(c);


var dataNascimento, nome, sobrenome, nomeCompleto;

nome = "Dalton";
sobrenome = "Chivambo";
nomeCompleto = nome + " " + sobrenome;

document.getElementById("texto").innerHTML = nomeCompleto