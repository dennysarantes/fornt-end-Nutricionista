function irFiltrando(){

    todosPacientes = document.querySelectorAll(".info-nome")
    pacienteEscolhido = document.getElementById("filtrar-tabela").value
    input = document.getElementById("filtrar-tabela")

     //é backspace? Se sim, remove os hiddens de todos!
    input.onkeydown = function() {
            var key = event.keyCode || event.charCode;
            if( key == 8 ){
                
                retirarFiltroParcial()
            }
        };
    //Descobre se existe algum nome
        ehExiste = false;
        verificaSeExisteNome(todosPacientes);
    //Se tiver, esconde os demais
         esconderNomesDiferentes(todosPacientes)


}

function retirarFiltroParcial(){
   todosPacientes = document.querySelectorAll(".info-nome")
   console.log("Tamanho nome: " + pacienteEscolhido.length)
   
    if(pacienteEscolhido.length == 1){
        console.log("entrou")
    }
    
    todosPacientes.forEach(paciente => {
            paciente.parentNode.classList.remove("esconder");
    });
     verificaSeExisteNome(todosPacientes);
     esconderNomesDiferentes();

}


function verificaSeExisteNome(pacientes){
    var expressao = new RegExp(pacienteEscolhido, "i") 
    pacientes.forEach(paciente => {
        if (expressao.test(paciente.textContent)){
            ehExiste = true;
        }
    });
}

function esconderNomesDiferentes(pacientes){
    var expressao = new RegExp(pacienteEscolhido, "i") 

    if (ehExiste) {
        pacientes.forEach(paciente => {
            if (!expressao.test(paciente.textContent)){
                paciente.parentNode.classList.add("esconder")
            }   
        });
    }


   /*  if (ehExiste) {
        pacientes.forEach(paciente => {
            if (!(paciente.textContent.includes(pacienteEscolhido))){
                paciente.parentNode.classList.add("esconder")
            }   
        });
    } */
}



function filtrarPaciente(){
    todosPacientes = document.querySelectorAll(".info-nome")
    pacienteEscolhido = document.getElementById("filtrar-tabela").value 

    //Descobre se existe algum nome
    ehExiste = false;
    todosPacientes.forEach(paciente => {
            if (paciente.textContent == pacienteEscolhido){
                ehExiste = true;
            }
        });
        
    //Se tiver, esconde os demais

    if (ehExiste) {
        todosPacientes.forEach(paciente => {
            if (!(paciente.textContent == pacienteEscolhido)){
                paciente.parentNode.hidden = true;
            }   
        });
    }else{
        alert("Paciente não encontrado, tente outro nome")
    }

}

function retirarFiltro(){
    todosPacientes = document.querySelectorAll(".info-nome")
    pacienteEscolhido = document.getElementById("filtrar-tabela")
    pacienteEscolhido.value = ""
    
    /* todosPacientes.forEach(paciente => {
            paciente.parentNode.hidden = false;
    }); */
    todosPacientes.forEach(paciente => {
        paciente.parentNode.classList.remove("esconder");
});
}