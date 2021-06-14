function addPaciente(botaoAdd){

    var form = document.querySelector(".form"); //paga o Form todo

    var inputsArray =  getDadosInseridosNoFormPiorado(form); //pega os dados inseridos no formulário

    var paciente = getDadosInseridosNoFormMelhorado(form); //versao melhorada
    
    /* var testeInputs = verificaPreenchimentoFormPiorado(inputsArray); */

    var testeInputs = verificaPreenchimentoFormMelhorado(paciente);

    if (!testeInputs) {
        alert("Todos os campos são obrigatórios!")
        return
    }
    
    testeInputs = verificaValidadeCamposInseridos(paciente);
    
    if (validaPeso()){
          
        return
    }

    console.log("IMC : " + testeInputs.toFixed(2))

    if (testeInputs < 5 || testeInputs > 50 || paciente.altura > 2.5) {
        console.log("IMC : " + testeInputs.toFixed(2))
        alert("Dados inválidos. IMC atual: " + testeInputs.toFixed(2))
        return
    }


    var celulas = insereNovaLinhaForm(); //cria nova linha de paciente na tabela
    
    insereDadosNaNovaLinha(inputsArray, celulas);
    
    form.reset(); 
}


function getDadosInseridosNoFormPiorado(form){

    var nomeAdd = form.nome.value;
    var pesoAdd = form.peso.value;
    var alturaAdd = form.altura.value;
    var gorduraAdd = form.gordura.value;

    return [nomeAdd, pesoAdd, alturaAdd, gorduraAdd]
}

function getDadosInseridosNoFormMelhorado(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value
    }

    return paciente;
}


function verificaPreenchimentoFormPiorado(inputsArray){

    for (var i = 0; i < inputsArray.length; i++){
        if (inputsArray[i].length < 1){
            return false;
        }
    }
    return true;
}

function verificaPreenchimentoFormMelhorado(paciente){
    if (paciente.nome  || paciente.peso 
        || paciente.gordura || paciente.altura){
        return true;
    }
    return false;
}


function insereNovaLinhaForm(){
    var table = document.getElementById("tabela");
    var ultimaLinhaTabela = table.rows.length;
    var row = table.insertRow(ultimaLinhaTabela);   
    row.classList.add("paciente");


    var cell1 = row.insertCell(0); cell1.classList.add("info-nome");
    var cell2 = row.insertCell(1); cell2.classList.add("info-peso");
    var cell3 = row.insertCell(2); cell3.classList.add("info-altura");
    var cell4 = row.insertCell(3); cell4.classList.add("info-gordura");
    var cell5 = row.insertCell(4); cell5.classList.add("info-imc");

    return [cell1, cell2, cell3, cell4, cell5]
}

function insereDadosNaNovaLinha(inputsArray, celulas){
    
    for (var i = 0; i < celulas.length; i++){
        if (i == 4){
            celulas[i].innerHTML  = 0;
            return
        }
        celulas[i].innerHTML = inputsArray[i];
        
    }
    
   /*  celulas[0].innerHTML = inputsArray[0]
    celulas[0].innerHTML = inputsArray[1]
    celulas[0].innerHTML = inputsArray[2]
    celulas[0].innerHTML = inputsArray[3]
    celulas[0].innerHTML = 0; */
}

function verificaValidadeCamposInseridos(paciente){

    return paciente.peso / (paciente.altura * paciente.altura);


}