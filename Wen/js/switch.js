
function verificaCor() {

    let cor = document.getElementById("cor").value;
    let color = document.getElementById("cor");

    cor = cor.toLowerCase();

    switch (cor) {
        case "azul":
            color.style.color = "blue"
            break;
        case "roxo":
            color.style.color = "violet"
            break;
        case "castanho":
            color.style.color = "brown"
            break;
        case "cinzento":
            color.style.color = "grey"
            break;
        default:
            var p = document.getElementById("teste");
            color.style.background = "white";

            p.style.color = "red";
            p.innerHTML = "Nenhuma cor disponivel para a cor: " + cor;
    }
}


//o switch é equivalente com ===


function verificaVariavel() {

    var x = "0"; //assim vai dar erro tem que ser exactamente 0

    switch (x) {
        case 0:
            color.style.color = "blue"
            break;
        default:
            var p = document.getElementById("teste");

            p.style.color = "red";
            p.innerHTML = "Nenhuma variável encontrada.";
    }
}

//dias da semana


function verificarDia() {

    var dia = new Date().getDay();
    var p = document.getElementById("teste");


    switch (dia) {
        case 0:
            p.innerHTML = "Hoje é Domingo";
            break;
        case 1:
            p.innerHTML = "Hoje é Segunda";
            break;
        case 2:
            p.innerHTML = "Hoje é Terça";
            break;
        case 3:
            p.innerHTML = "Hoje é Quarta";
            break;
        case 4:
            p.innerHTML = "Hoje é Quinta";
            break;
        case 5:
            p.innerHTML = "Hoje é Sexta";
            break;
        case 6:
            p.innerHTML = "Hoje é Sábado";
        default:
            p.style.color = "red";
            p.innerHTML = "Não sei que dia é hoje!!";
    }
}