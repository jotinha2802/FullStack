function daralerta() {
    var variavel = document.getElementById("texticulo").value
    window.alert ("Seu amigo é o " + variavel3);
}

// daralerta("ronaldo");


// window.alert("ESTE É UM ALERTA")
console.log ("ESTA MENSAGEM ESTÁ ESCONDIDA");

var entrada = prompt("entre com sua idade");

console.log (entrada)


entrada = parseInt(entrada);

if (entrada>=18){
    console.log ("Você é de maior")
    document.getElementById("testeID").innerHTML ="Você é de maior"
    document.getElementById("bodinho").style.setProperty("background-color","red");
}
else if (entrada<=18) {
    console.log ("Você é de menor")
}
else {
    console.log ("INVALIDO")
}