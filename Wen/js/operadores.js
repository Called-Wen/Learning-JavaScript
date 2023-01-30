document.writeln("I am Power");

console.log(5+2);

//Aritiméticos
var a,b,c;

a=1;
b=2;

c=a+b;

console.log(c);

c=++a;

console.log(c)

//Atribuição = += = =++

a=++a;//2 isto e adiciona a= a+1;

a+=a;//2 isto e a= a + a;

//Sequência 

//Comparação == === !=
var x, y, z;

x=8;
y="8";

z= (x==y);
console.log(z);
//retornara true para comparar texto e nr tem que usar ===
z= (x===y);
console.log(z);

console.log(x!==y)

//Condicional (Termário)

var idade, eleitor;
idade=18;
eleitor= (idade<18)?"Não, Eleitor": "Sim, Eleitor";


//Lógicos eleitor= !(idade===65 || eleitor===18);