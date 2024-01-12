function frasesNoAleatorio () { //Function conectada no Onclick
    let strings = [
        " Em busca do ótimo não se faz o bom.",
        "Nada se cria, nada se perde, tudo se transforma",
        "Aquilo que não sei, também não finjo saber que sei",
        "Não deixe pra amanhã o que se pode fazer hoje",
        "Pimenta nos olhos dos outros é refresco",
        "O corinthians não é um time que tem uma torcida, o corinthians é uma torcida que tem um time.",]; //var de arrays das frases.
 
    let aleatorio = Math.floor(Math.random() * 5) //var de valores aleatórios definidos pelo function math.random() e o número arredondado pelo math.floor. o "*5" define o limite de aleatóriedade, que deve ser baseado na quantidade de frases do array.
    let faleatorio = strings[aleatorio]  //var criada pra receber var de frases (strings) e definir os arrays da mesma como aleatórios com a var "aleatório"

    document.getElementById('frase').innerHTML = faleatorio //busca de ID aplicado no paragrafo das frases, para aplicar innerHTML, para que realize a alteração da frase direto no HTML. Definimos  o valor dessa mudança com o faleatorio, que seriam as frases ordanadas com array aleatório, conforme explicado acima. 
}
