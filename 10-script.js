//Na feira da rua do Mano Juca, as maçãs custam R$0,30 se ele comprar menos de uma dúzia, mas se comprar 12 ou mais cada uma custa apenas R%0,25. Crie um programa para ler o número de maçãs que ele vai comprar e inforar quanto será o total da compra.

let macas = Number(prompt("Quantas maçãs voce irá comprar?"))
let preco

if(macas >= 1 && macas < 12){
    preco = macas * 0.50
    alert("Voce irá pagar R$" + preco + " em maçãs")
} else if(macas >= 12){
    preco = macas * 0.25
    alert("voce irá pagar R$" + preco + " em maçãs")
}
