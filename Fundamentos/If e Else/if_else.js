console.log ("Meu IMC");
console.log ("---------------");
console.log ("Tenho 1.79m de altura");
console.log ("Peso 77kg");

let altura = 1.79;
let peso = 77;

let IMC = peso / (altura  ** 2);

console.log ("Meu IMC é " + IMC);


if (IMC <= 16.9) {
    console.log ("Estou muito abaixo do peso");
} else if (IMC >= 17 && IMC <= 18.4) {
    console.log ("Estou pouco abaixo do peso");
} else if (IMC >= 18.5 && IMC <= 24.9) {
    console.log ("Estou com o peso normal");
} else if (IMC >= 25 && IMC <= 29.9) {
    console.log ("Estou acima do peso");
} else if (IMC >= 30 && IMC <= 34.9) {
    console.log ("Estou muito acima do peso");
} else if (IMC >= 35 && IMC <= 40) {
    console.log ("Estou com obesidade n1");
} else  {
    console.log ("Estou com obesidade n2");
}
