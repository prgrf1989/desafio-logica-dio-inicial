/**
 * DIO 
 * DESAFIO CLASSIFICADOR DE HEROI
 * 
 * OBJETIVO:
 * Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um heroi,
 * depois utilize uma estrutura de decisão para apresentar alguma das mensagem abaixo:
 * 
 * Se XP for menor do que 1.000 = Ferro
 * Se XP for entre 1.001 e 2.000 = Bronze
 * Se XP for entre 2.001 e 5.000 = Prata
 * Se XP for entre 5.001 e 7.000 = Ouro
 * Se XP for entre 7.001 e 8.000 = Platina
 * Se XP for entre 8.001 e 9.000 = Ascendente
 * Se XP for entre 9.001 e 10.000 = Imortal
 * Se XP for maior ou igual a 10.001 = Radiante
 */

let dadosHeroi = ["Felipe", "96000"]
let nivelXp

if(dadosHeroi[1] <= 1000){
    nivelXp = "FERRO"
} else if(dadosHeroi[1] >= 1001 && dadosHeroi <= 2000){
    nivelXp = "BRONZE"
} else if(dadosHeroi[1] >= 2001 && dadosHeroi[1] <= 5000){
    nivelXp = "PRATA"
} else if(dadosHeroi[1] >= 5001 && dadosHeroi[1] <= 7000){
    nivelXp = "OURO"
} else if(dadosHeroi[1] >= 7001 && dadosHeroi[1] <= 8000){
    nivelXp = "PLATINA"
} else if(dadosHeroi[1] >= 8001 && dadosHeroi[1] <= 9000){
    nivelXp = "ASCENDENTE"
} else if(dadosHeroi[1] >= 9001 && dadosHeroi[1] <= 10000){
    nivelXp = "IMORTAL"
} else {
    nivelXp = "RADIANTE"
}

console.log("Olá " + dadosHeroi[0] + " o seu nível de XP é: " + nivelXp)
