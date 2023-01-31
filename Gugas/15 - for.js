
for (let i = 0; i<=10; i++){
    document.getElementById("numeros").innerHTML += i+ " - ";
}

var year = new Date().getFullYear();
console.log(year)
for(let i = year; i>=1940; i--){
    document.getElementById("ano").innerHTML += "<option value='"+i+"'>"+i+"</option>";
}

const carros = ["Volvo","Mazda","Toyota","Ford"]
for(let i=0 ; i<carros.length; i++){
    document.getElementById("carro").innerHTML += carros[i]+"</br>";
}