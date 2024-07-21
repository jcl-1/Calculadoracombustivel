
function calcular(event){
    event.preventDefault();
    
    let alcoolInput = document.getElementById("alcool").value;
    let gasolinaInput = document.getElementById("gasolina").value;
    let contentresult = document.getElementById("content-result");
    let textresult = document.getElementById("text-result");

    let gasolinaSpan = document.getElementById("gasolina-result");
    let alcoolSpan = document.getElementById("alcool-result");
let calculo = (alcoolInput / gasolinaInput);


if(calculo < 0.7){ //Aqui compensa usar álcool
   textresult.innerHTML = "Compensa usar Álcool";
}
else{ //compensa usar gasolina
    textresult.innerHTML = "Compensa usar Gasolina"; 
}

gasolinaSpan.innerHTML = "Gasolina R$ " + gasolinaInput;
alcoolSpan.innerHTML = "Álcool R$ " + alcoolInput;
contentresult.classList.remove("hide")
}
