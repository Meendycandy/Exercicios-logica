//Crie um programa que leia a idade de uma pessoa e diga se ela pode votar em uma eleição ou não. As possibilidades são:
// - Menores de 16: não podem votar/
// - Com 16 e 17: voto facultativo;
// - De 18 a 65 anos: voto obrigatório;
// - Maiores de 65: voto facultativo.

let idade = Number (prompt("Digite sua idade :"))

if(idade <16){
    alert("Voce não vota ainda")
}else if(idade == 16 && idade ==17){
    alert("Voce poderá votar mas seu voto é facultativo")
}else if(idade >= 18 && idade <=65){
    alert("Voce deve votar, o seu voto é obrigatório")
}else if(idade >65){
    alert("voce poderá votar mas seu voto é facultativo")
}