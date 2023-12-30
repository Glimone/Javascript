
//A função serve para a aplicação de diversos comandos para fins específicos. Isso significa que quando quiser aplicar uma função específica diversas vezes (Ou não, não é obrigatório essa regra) você deve criar em ordem de função, posteriormente chama-la. 

//Inicio de processamento
                                                        /*Essa é a área de parâmetros, que é conectada com a chamada da função pós definição da mesma */
function/*"Function" é o que da inicio à função*/ media ( Mat, Por, Bio, Hum, red, Div=5) { 
    /*Criação de var dentro do escopo local, para as fórmulas.*/
    let plus = Mat + Por + Bio + Hum + red
    let half = plus / Div
    
    /*Comando de return, para informar qual é a informação que será retornada. */
    return half 
}

/*Var fora do escopo local que armazena a info da local. */
let split = media (630, 900, 560, 710, 800);
                  /*Info dos parâmetros, que teóricamente seria informado cada um deles pelo user. */

//Fim processamento

//Teoricamente, inicio dos dados de entrada
console.log ("Notas ENEM:");
console.log ("Matematica=630");
console.log ("Português=700");
console.log ("Ciência Biológicas=560");
console.log ("Ciências humanas=710");
console.log ("RedaÇão=800"); 

//fim dados entrada

//Saída da média após processamento acima (Dados de saída)
console.log ("Média final = " + split);


