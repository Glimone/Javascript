//Outros 2 tipos de estruturas condicionais são o Switch e o Ternário.

//Switch: Tem foco em casos, apenas. Trabalha basicamente com igualdade. 
//Estrutura: 

let Maria = "Sim"
let casar = 2


console.log ("Maria é a namorada do Gabriel. Isso significa que eles vão casar?")

//Aqui, utilizamos uma estrutura condicional para poder aplicar o switch.
if (Maria === "Sim") {
    //Para a aplicação do switch, é necessário primeiro chama-lo com a variável que tem o valor do caso.
    switch ( casar ) {
        //Aqui, após as chaves, são aplicados os casos, que vão se comparar com o valor da var
        case 1: 
        console.log ("Não vão casar");
        //Break é usado para dar fim no case e para que possam  seguir.
        break

        case 2: 
        console.log ("Sim, pois queremos casar.");
        break

        //Defaut é o caso em que nenhum dos cases é o correto. Nesse caso em si não seria aplicável, pois só entraria no Switch com uma resposta do user. Aqui a interação é apenas com a máquina.
        defaut: 
        console.log ("Maria não é a namorada do Gabriel");
        break
    }
}


console.log ();
console.log ("=====================");
//Ternário trabaalha apenas com true or false.
//Estrutura:

    let namorada = 20;
    let Maria1 = "Sim";
    console.log ("Maria tem vinte anos?")
                 //A estrutura do ternário se baseia em informar a var, e verificar se é verdadeira ou falsa.
                                        
                            /*O "?" da inicio a comparação*/
                                     //O primeiro resultado é o verdadeiro ":" separa ele do segundo, que é o falso
                                                                                    //O  segundo é o falso. 
    let result = Maria1 === "Sim" ? "Ela tem a idade e é a Namoradaa do Gabriel" : "Ela não é a namorada do Gabriel"
    console.log (result);

    