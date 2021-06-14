function calcImc() {
    var todosPacientes = document.querySelectorAll(".paciente") //Buscando todos os pacientes
     todosPacientes.forEach(alteraIMC) //Varrer a collection

        function alteraIMC(paciente , index , pacientes){ //para cada paciente será executado
            var peso = pacientes[index].children[1].textContent; //Pega o peso
            var altura = pacientes[index].children[2].textContent; //Pega a altura
        
            if (peso > 200 || altura > 2.5) {
                var imcHTML = pacientes[index].children[4];
                imcHTML.textContent = "verificar valores informados";
                pacientes[index].classList.add("paciente-invalido");
                return 
            }

            var imcPaciente = (peso / (altura * altura)) //Calcula IMC
        
            var imcHTML = pacientes[index].children[4]; //Pega o campo IMC no HTML
           
            if (imcPaciente < 0){
                imcHTML.textContent = "IMC menor que 0";
                pacientes[index].classList.add("paciente-invalido");
                return
            }
           
            imcHTML.textContent = imcPaciente.toFixed(2); //Seta o HTML com o IMC calculado
            
        }

    /* Codigo para alterar apenas o IMC do ultimo paciente.
    var qtdPacientes = todosPacientes.length;
    var pesoUltimoPaciente = todosPacientes[qtdPacientes - 1].children[1].textContent;
    var alturaUltimoPaciente = todosPacientes[qtdPacientes - 1].children[2].textContent;

    var imcUltimoPaciente = (pesoUltimoPaciente / (alturaUltimoPaciente * alturaUltimoPaciente))

    var imcHTML = todosPacientes[qtdPacientes - 1].children[4];
    imcHTML.textContent = imcUltimoPaciente;
 */

}
