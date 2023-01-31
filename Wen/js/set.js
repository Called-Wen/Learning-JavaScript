
function iniciarContagem(){
//O setTimeout Executa apena uma vez apos o tempo determinado 
    document.getElementById("tempo").innerHTML = "Começou a contar!";
   tempo=  setTimeout(function(){
        document.getElementById('tempo').innerHTML = "Executou o setTimeout";

    },5000)

}

function pararContagem(){

    clearTimeout(tempo);
    document.getElementById("tempo").innerHTML = "Parou de contar!";

}


//para cronometro

function iniciarContagem(){

        tempo = setInterval(function(){
            var cronometro = document.getElementById('tempo').innerHTML;
            var soma = parseInt(cronometro) + 1;

            // var soma = parseInt(cronometro) - 1;

            // if(soma === 0){
            //     cronometro = document.getElementById('tempo').innerHTML= "Tempo Esgotado";
            //     pausarContagem(tempo);

            // }
            // else{
            //     document.getElementById('tempo').innerHTML = soma;

            // }
            document.getElementById('tempo').innerHTML = soma;
    
        },1000)
    
    }
    
    function pausarContagem(){
    
        clearInterval(tempo);
    
    }

