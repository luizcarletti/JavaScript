function calc() {
    let name = document.getElementById('name').value
    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value
    let res = document.getElementById('res')

    if (name !== '' && peso !=='' && altura !== '') {
        let imc = (peso / (altura * altura)).toFixed(1)

        res.innerHTML = `${name}, o seu IMC esta em ${imc}`
    } else {
        alert ('Preencha os campos vazios!')
    }
}