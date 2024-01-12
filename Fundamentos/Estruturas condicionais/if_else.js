function RetornoImc () {

    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value
    

    let resultado = peso / altura**2
    

    
    
    let mensagem = [ 
        "Você está muito abaixo do peso, procure ajuda!",
        "Você está abaixo do peso, procure ajuda e se alimente melhor!",
        "Você está no peso ideal",
        "Você está um pouco acima do peso, se cuide um pouco mais!",
        "Você está com obesidade N1, procure ajuda!",
        "Você está com obesidade N2, procure ajuda imediatamente!"

    ]




    let retorno 

    if (resultado < 16.9) {
        retorno = mensagem[0]
    } else if (resultado >= 17 &&  resultado <= 18.4 ) {
        retorno = mensagem[1]
    } else if (resultado >= 18.5 &&  resultado <= 24.9 ) {
        retorno = mensagem[2]
    } else if (resultado >= 25 &&  resultado <= 29.9 ) {
        retorno = mensagem[3]
    } else if (resultado >= 30 &&  resultado <= 34.4 ) {
        retorno = mensagem[4]
    } else if (resultado >= 35 &&  resultado <= 40 ) {
        retorno = mensagem[5]
    } else if (resultado > 40) {
        retorno = mensagem[6]
    } 
    
    


    document.getElementById('retorno').innerHTML = retorno
}