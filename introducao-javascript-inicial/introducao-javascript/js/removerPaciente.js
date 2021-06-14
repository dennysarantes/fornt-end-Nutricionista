var tabelaPacientes = document.querySelector("#tabela-pacientes")

/* tabelaPacientes.addEventListener("dblclick", function(event){
    var elementoASerApagado = event.target.parentElement
    elementoASerApagado.remove();
}); */

tabelaPacientes.addEventListener("dblclick", function(event){
    
    elementoASerApagado = event.target.parentElement

    console.log(elementoASerApagado)

    if (elementoASerApagado.classList.contains("apagar")){
        elementoASerApagado.classList.remove("apagar");
    }else{
        elementoASerApagado.classList.add("apagar");
    }
});

function deletarSelecao(){
    elementosASerApagados = document.querySelectorAll(".apagar")
    var qtdElementosApagar = elementosASerApagados.length
    
    if (qtdElementosApagar == '0'){
        console.log("entrou!")
        alert("clique duas vezes para selecionar uma linha");
    }else{
        if (confirm("Você realmente deseja remover?")){
            elementosASerApagados.forEach(element => {
                element.classList.add("fadOut")
                setTimeout(function(){ element.remove(); }, 500);
        });}
    }

}

/* var pacientes = document.querySelectorAll(".paciente")

/* pacientes.forEach(function addDblClick(paciente){
    paciente.ondblclick = function () {
        this.remove();
    }
})
 */ 