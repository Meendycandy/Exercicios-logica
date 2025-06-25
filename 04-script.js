//Faça um algoritimo ue leia o n° da palestra que ele quer participar.
//E mostre o local e o horário que ela acontecerá.
//Palestra disponiveis.

let vetorpalesta = ["1 - Animação com scratch, laboratório 305, 19h" , "2 - Scratch para gamers, laboratório 512, 20h" , "3 - JavaScript, laboratório 305, 20h" , "4 - Tópicos avançados do JvaScript, laboratório 305, 20h" , "5 - Vida e carreira, auditorio, 21"] 
let palestra =prompt("Qual palestra você deseja ir ?")
if(palestra >= 1 &&palestra <=5){
    alert(vetorpalestra[palestra - 1])
}