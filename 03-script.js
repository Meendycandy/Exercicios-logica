
//Idade do Cachorro: Peça ao usuário que insira a idade de seu cachorro e, em seguida, calcule a idade do cachorro em anos humanos (um ano de cachorro equivale a sete anos humanos). Informe se o doguinho já pode se aposentar por idade :D

//Ler a idade
//Calcular a idade de cachorro
//Mostrar a idade de cachorro
//Dizer se já pode se aposentar

let idade = Number(prompt("Qual a idade atual do cachorro?"))
let idadeDeCachorro = idade * 7 
alert("Em idade de cachorro isso dá " + idadeDeCachorro + "anos" )

if(idadeDeCachorro >= 65){
    alert("Ele já pode se aposentar")
}else{
    alert("Não pode se aposentar ainda, tem motoqueiro pra morde")
}
