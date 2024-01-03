
    
    function precoCombustivel () {
        let palcool = document.getElementById ('alcool').value ;
        let pgasosa = document.getElementById ('gasolina').value ;
        let resultado = palcool / pgasosa

        if (palcool === "" && pgasosa === "") {
            alert ("Escreva os valores dos combustíveis!")
            document.getElementById ('result').innerHTML = "Resultado"
        }else  if(pgasosa === "") {
            alert ("Escreva o valor da gasolina") ;
        } else if (palcool === "") {
            alert ("Escreva os valores do Álcool");
            
        }
           
        if (resultado >= 0.7) {
            document.getElementById ('result').innerHTML = "É melhor utilizar Gasolina"
        } else if (resultado <0.7) {
        document.getElementById ('result').innerHTML = "É melhor utilizar Álcool"
        }else {
            document.getElementById ('result').innerHTML = "Resultado"
        }
    }


