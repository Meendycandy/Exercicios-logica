//Nosso amigo Mano Juca ganhou tanto dinheiro no Uber que resolveu tirar férias. Sem destino, sm regras, vida loka, lobo solitário, sem destino, um dia em caa lugar, sem dia pra voltar, até o dinheiro acabar..

//Logo nos primeiros dias ele encontrou um paraíso e resolveu quebra sua única regra e ficar alguns dias por ali. Encontrou um albergue meio bom e fez check in, mas não conseguiu entender de forma alguma como o hotel calculava o valor da conta. Ele é meio burro, você sabem...

//O albergue utilizas faixas de preço de acordo com o número de diárias até 5 diárias, o preço por diária é R$100,00;
//dE 6 a 10 diárias, R$90.00 por dia;
//A partir de 11 dias, sai R$80,00 por dia;

//Outros fatos relevantes para determinar o valor da conta:
//-Ele acabou ganhando um desconto a amis de 10% do valor total porque teve um "envolvimento emocional"com a moça que trabalha no balcão;
//-Quando ele abriu a carteira pra pagra, a moça viu que ele tem a carteirinha de Associação dos motoristas do Uber de Palhoça, entidade com a aqual o albergue tem convênio, e aplicou mais 15% (do valor total) de desconto;
//- Ele se passou e  vai pagar emulta de R%150 por danos materiais.

//Criar um programa que lê o número de dias que ele vai ficar no albergue e apresente o valor final da conta e sua composição (os detalhes, pagamentos, descontos...)

let diaria = Number(prompt("Quantas diarias voce precisa?"))
let preco

if(diaria >= 1 && diaria <= 5){
    preco = diaria * 100 * 75 / 100 + 150
    alert("Sua conta no total custou R$" + preco)
} else if(diaria >= 6 && diaria <= 10){
    preco = diaria * 90 * 75 / 100 + 150
    alert("Sua conta no total custou R$" + preco)
} else if(diaria >= 11){
    preco = diaria * 80 * 75 / 100 + 150
    alert("Sua conta no total custou R$" + preco)
}