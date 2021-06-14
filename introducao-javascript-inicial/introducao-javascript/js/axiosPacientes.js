function buscarPacientesExternos(){
    axios.get('http://api-pacientes.herokuapp.com/pacientes')
    .then(response => {
        console.log(response.data)

        var pacientesExternos = response.data

        pacientesExternos.forEach(p => {
           var celulas =  insereNovaLinhaForm();
           var dados = [
            p.nome,
            p.peso,
            p.altura,
            p.gordura,
            p.imc]

            insereDadosNaNovaLinha(dados, celulas)

        });

    })
    .catch(error => {
        console.log(error)
    })
}
