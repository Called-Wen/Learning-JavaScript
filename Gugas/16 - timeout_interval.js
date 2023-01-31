


function iniciarContagem(){

// document.getElementById('tempo').innerHTML = "Comecou a contar!"

//Executa apenas uma vez apos o tempo determinado.

//     setTimeout(function(){
//         document.getElementById('tempo').innerHTML = "Executou o setTimeout";
//     },1000);
//



tempo = setInterval(function(){
    var cronometro = document.getElementById('tempo').innerHTML
    var soma = parseInt(cronometro) +1;
    document.getElementById('tempo').innerHTML = soma
},1000)

 }





 function pausaContagem(){
    clearInterval(tempo)
 }