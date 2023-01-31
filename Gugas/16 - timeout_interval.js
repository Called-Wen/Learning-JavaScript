


function iniciarContagem(){

document.getElementById('tempo').innerHTML = "Comecou a contar!"

//Executa apenas uma vez apos o tempo determinado.
    setTimeout(function(){
        document.getElementById('tempo').innerHTML = "Executou o setTimeout";
    },1000);
}