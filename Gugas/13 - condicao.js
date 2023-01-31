function verificar(){
    var nome = document.getElementById("nome").value;
    let p = document.getElementById("texto");
    
    if(nome =="" || nome==null){
        p.innerHTML = "O campo não pode estar vazio!";
        p.style.color ="red"
    } else {
        p.innerHTML = "";
    }
}