
    //Criação de função, introduzida no onclick do botão "Calcular" no HTML.
    function precoCombustivel () { 

        const palcool = document.getElementById ('alcool').value ; //variavel que vai receber o valor do álcool. "document.getElmentById" busca o valor do ID que está no button text onde é deixado claro que deve escrever o valor. ".value segura o valor na variável, ou seja, fixa o valor informado na caixa."
        const pgasosa = document.getElementById ('gasolina').value ;
        let resultado = palcool / pgasosa

        if (palcool === "" && pgasosa === "") {
            alert ("Escreva os valores dos combustíveis!")
            document.getElementById ('result').innerHTML = "Resultado" //Aplicamos o "document.getElementoByID ()" no ID "Result para que mantenha o texto "resultado" caso a condição se cumpra.
        }else  if(pgasosa === "") {
            alert ("Escreva o valor da gasolina") ;
        } else if (palcool === "") {
            alert ("Escreva os valores do Álcool");
            
        }
           
        if (resultado >= 0.7) { //Estrutura condicional que define o retorno.
            document.getElementById ('result').innerHTML = "É melhor utilizar Gasolina" //Aplicamos o document.getElementById ('result' OBS: ID defini no HTML) para buscar o valor de 'result'. O ".innerHTML" possibilita realizar a alteração textual do 'result' se ocorrer a condição. O texto é definido depois.
        } else if (resultado <0.7) {
        document.getElementById ('result').innerHTML = "É melhor utilizar Álcool"
        }else {
            document.getElementById ('result').innerHTML = "Resultado" //Aqui, definimos o else exatamente com o mesmo document.getElementById lá do primeiro if conficional, para que ambos existam na situação.
        }
    }


