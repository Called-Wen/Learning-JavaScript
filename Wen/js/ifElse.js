var interruptor = "on";

if (interruptor == "on"){
    alert('A lampada está ligada');

} else {
    alert('A lampada está desligada');
}



var hora = new Date().getHours();

if(hora<12){
    alert('Bom dia')
} else if(hora < 18){
    alert('Boa tarde');
} else{
    alert('Boa noite');
}


function verificar(){
    if (document.getElementById("nome").value==="" ||document.getElementById('nome').value===null ){
        const p = document.getElementById("teste");
        p.innerHTML= "O campo não pode estar vazio";
        p.style.color = "red";

    } else{
        const p = document.getElementById("teste");
        p.innerHTML = "Parabéns";
        p.style.color = "green";
    }
}


