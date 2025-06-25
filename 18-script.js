//- Ler a distância da próxima corrida e dizer quanto tempo vai levar.
//1 dado de Entrada: Distância (em quilômetros);
//1 dado de Saída: Tempo de viagem (em segundos). Simples assim.

let distancia = Number(prompt("Digite sua distancia em km: "))
let tempo = distancia / velocidade;
let velocidade = 300000

alert('A viagem vai durar ' + tempo + ' segundos!');