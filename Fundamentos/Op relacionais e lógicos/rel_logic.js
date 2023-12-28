/*Operadores relacionais: 

*São do tipo que relacionam os elementos e trazem um retorno booleano (False or true).
*/

console.log ("Tipos de operadores relacionais:");
console.log ();
console.log ("== - Igual a, comparando apenas os valores");
console.log ("=== - Igual a, comparando os valores e o tipo de dado (Number, text)")
console.log ("!= - Diferente de, comparando apenas os valores");
console.log ("!== - Diferente de, comparando valores e o tipo de dado.");
console.log ("> - Maior que");
console.log ("< - Menor que");
console.log (">= - Maior ou igual que");
console.log ("<= - Menor ou igual que");
console.log ();
console.log ("Exemplos:");

console.log ("A maioridade é alcançada aos 18");
console.log ("Eu tenho 20, logo sou de maior");
let idade = 20;
let maioridade = 18;
let resultado = idade > maioridade;
console.log ("R:");
console.log (resultado); 
console.log ();

console.log ("Exemplo2:");
console.log ("Tenho 20 ovos e 5 quebraram, logo tenho 12.")
let n1 = 20;
let n2 = 5;
let r = (n1 - n2) === 12;
console.log (r);
console.log ();

console.log ("-----------------");
//Operadores lógicos definem uma condição e levantam um true or false
console.log ();
console.log ("Tipos de operadores lógicos:");
console.log ("E  = &&(Todos os elementos devem ser true para mostrar true)");
console.log ("OU = ||(Apenas um elemento é suficiente para mostra true) ");
console.log ();

console.log ("Exemplo:");
console.log ("Maria tem 20 anos, totalizando com Gabriel, ambos tem 41 anos");
console.log ("Acho que a idade de Gabriel é 24!");
let Maria = 20;
let Gabriel = 21;
let result = Maria === 20 && Gabriel === 22; 
console.log (result);
console.log ("Não! na verdade a idade dele é " + Gabriel);