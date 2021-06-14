function validaPeso(){
    let form = document.querySelector(".form");
    peso2 = document.querySelector("#peso");
    let peso = form.peso.value;
    
    
    if (peso < 0 || peso > 250 || isNaN(peso)){
        alert("peso errado!")
        setaPeso();
        console.log("inserindo msg")
        insereMsgErro();  
        return true;
    }

    peso2.classList.remove("peso-invalido");  
    retiraMsgErro();
    return false; 
} 

function setaPeso(){
    /* peso2.value = 0; */
    peso2.classList.add("peso-invalido");
}
