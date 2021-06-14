function insereMsgErro (){
    var msgErro = document.querySelector("#mensagemError")
    msgErro.innerHTML =  "Verifique os campos em vermelho";
}

function retiraMsgErro(){
    var msgErro = document.querySelector("#mensagemError")
    msgErro.textContent = ""
}