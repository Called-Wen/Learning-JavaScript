function verificar() {
    var nome = document.getElementById("nome").value;
    let p = document.getElementById("texto");

    if (nome == "" || nome == null) {
        p.innerHTML = "O campo não pode estar vazio!";
        p.style.color = "red"
    } else {
        p.innerHTML = "";
    }
}

function verificarCor() {
    let corval = document.getElementById("cor").value;
    let color = document.getElementById("cor")
    let p = document.getElementById("texto");
    switch (corval) {
        case "azul":
            color.style.background = "blue"
            p.innerHTML = ""
            break;
        case "vermelho":
            color.style.background = "red"
            p.innerHTML = ""
            break;
        case "verde":
            color.style.background = "green"
            p.innerHTML = ""
            break;
        default:

            p.innerHTML = "Nenhuma cor disponivel para " + corval
            p.style.color = "red"
    }
}