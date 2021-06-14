/* var titulo = document.querySelector("h1");
titulo.textContent = "Nome substituido"; */
var botaoAdd = document.querySelector("#adicionar-paciente");

botaoAdd.addEventListener("click", function(event){
    event.preventDefault();
    addPaciente(botaoAdd);
});


function zerarIMC () {

    var todosImcs = document.querySelectorAll(".info-imc")
    var todosPacientesInvalidos = document.querySelectorAll(".paciente-invalido")
    todosImcs.textContent = "0"

    todosImcs.forEach(zeraImcs)

    function zeraImcs(imc , index , imcs){
        imcs[index].textContent = 0
    }
    
    for (let i = 0; i < todosPacientesInvalidos.length; i++) {
        todosPacientesInvalidos[i].classList.remove("paciente-invalido");
        
    }
    
    
}