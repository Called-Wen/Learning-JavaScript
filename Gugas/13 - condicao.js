function verificar(){
    var nome = document.getElementById("nome").value;

    if(nome =="" || nome==null){
        let p = document.getElementById("texto");
        p.innerHTML = "O campo não pode estar vazio!";
        p.style.color ="red"
    } else {
        let p = document.getElementById("texto");
        p.innerHTML = "";
    }
}