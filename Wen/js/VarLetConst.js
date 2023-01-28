//let 

//var

//const

var pote = "bon bon";

console.log(pote);

/*var a = 1;

var b = 2;

var c = a + b;
*/

var a, b, c;

a=1;
b=2;
c=a+b;

console.log(a);

var nome, apelido, nomeCompleto, idade, soma, pessoa;

nome="Wen";
apelido="MAcie";
idade=23;
nomeCompleto=nome+" "+apelido;

var pessoa= idade+nome;

var pessoa= idade+10+nome;

var pessoa= nome+idade+10;

soma= idade+40;

pessoa=soma+nome;

//let funciona com o valor declarado no seu bloco ou seja local global

let x=2;

{
    let x =4;
    console.log(x);
}

console.log(x);

//const e unico e nunca variaa
const p=10;

{
    const p = 1;
}

// const p=4;

