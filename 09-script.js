//Tendo como entrada a altura (em metros) e o gê (1: feminino; 2: masculino) de uma pessoa, construa um programa que calcule e apresente seu peso ideal utilizando as fórmulas abaixo:
// - para mulheres: (62.1 * altura) - 44.7
// - para homens: (72.7 * altura) - 58

let altura = Number(prompt("Digite sua altura em metros"))
let genero = Number(prompt("Qual e o seu genero biologico 1: Masculino 2: Feminino"))
let pesoideal

if(genero = 1){
    (pesoideal = 72.7 * altura - 58)
    alert("Seu peso ideal seria " + pesoideal)
} else if(genero = 2){
    (pesoideal = 62.1 * altura - 44.7)
    alert("Seu peso ideal seria " + pesoideal)
} else if(genero <= 0 && genero >= 3){
    alert("Numero incorreto, digite novamente")
}
 