/*
onclick: quando recebe click
ondblclick: quando recebe dois clicks

onmouseover:
onmouseout:
onmousedown: quando pressiona no mouse
onmouseup: quando pressiona e so dispara quando solta no onfocus:
onchange:
onblur: faz o elemento perder o foco
onkeydown: quando aperta a tecla
onkeypressed: quando se pressiona uma tela e solta
onkeyup: quando solta a tecla
onload: dispara quando a pagina termina de carregar
onresize:
*/

function eventoClick(){
    alert('Acionou um evento ')
    document.body.style.background="yellow";

};

function eventoDblClick(){
    alert('Acionou evento de clique duplo ')
    document.body.style.background="pink";

};

function mudaCor(){ //onmouseover onmouseleave onmousedown onmouseup
    let div = document.getElementById("teste");
    div.style.background= "violet";
}

function mudaCorOrg(){ //onmouseout 
    let div= document.getElementById("teste");
    div.style.background = "black";
}

function limpaTexto(){
    document.getElementById("campoTexto").value="";

};

function teclaPressionada(){
    let entrada = document.getElementById("campoTexto").value;
    console.log(entrada);

}


function mudou(){
    console.log('mudou');

};


function eventoBlur(){
    document.body.style.background="red";

};

function inicio(){
    alert('Terminou de carregar');
}

function redimensionou(){
    console.log('Houve redimensionamento!!');
}


