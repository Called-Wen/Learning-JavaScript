
for(let i= 0; i <10001; i++){
    document.getElementById("teste").innerHTML += i+ " - ";
}



const ano = new Date().getFullYear();

for (let i = ano; i>=1900; i--){
    document.getElementById("ano").innerHTML += "<option value='"+i+"'>"+i+"</option>";
}

const carro = ["Golf", "Roil Royce", "Range Rover", "Chevorlet"];
// carro.join(" - ")

for (let i=0; i>=carro.length;i++){
    document.getElementById("teste").innerHTML += carro[i];

}
