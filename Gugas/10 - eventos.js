
function clickBtn(){
    document.body.style.background = "blue";
}

function onMouseOver(){
    let div = document.getElementById("div");
    div.style.background = "red";
}

function onMouseOut(){
    let div = document.getElementById("div");
    div.style.background = "blue";
}

function onFocus(){
    document.getElementById("input_text").value = "";
}