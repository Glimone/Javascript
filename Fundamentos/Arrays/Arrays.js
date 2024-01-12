   
   
   //A Criação de arrays é feito utilizando variável normalmente e []. A idéia é armazenar mais de um valor numa única variável, assim criando uma lista de coisas, exatamente como vetores.
   let teste = ["Maria", "Gabriel", "Alessandra"] //Uso de []e adição dos elementos do caso.
    teste.push ("Adelânia"); //o ".push" é utilizado para adicionar mais um elememnto que não esteja na lista.
    teste[3] = "Bobby e Mia" //Os elementos criados são definidos por números, começando por 0. No mmomento de chamar, você o utiliza co "array[number]". Nesse caso, chamei e adicionei o array 3, que antes era adelânia, criado pelo .push. 
    delete teste [3] //Para deletar um array, basta citar "delete", a variável e o array number
    teste[3] = "Bobby, Mia, E TODOS",  

    console.log (teste);