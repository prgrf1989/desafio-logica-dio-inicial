/**
 * DIO 
 * DESAFIO CLASSIFICADOR DE HEROI
 * 
 * OBJETIVO:
 * Crie uma função que recebe como parâmetros a quantidade de vitórias e derrotas de um jogador,
 * depois disso retorne o resultado para uma variável, o saldo de rankeadas deve ser feito através do calculo (vitórias - derrotas)
 * 
 * Se vitórias for menor do que 10 = Ferro
 * Se vitórias for entre 11 - 20 = Bronze
 * Se vitórias for entre 21 - 50 = Prata
 * Se vitórias for entre 51 - 80 = Ouro
 * Se vitórias for entre 81 - 90 = Diamante
 * Se vitórias for entre 91 - 100 = Lendário
 * Se vitórias for maior ou igual a 101 = Imortal
 * 
 * # SAÍDA
 * Ao final exibir uma mensagem:
 * "O Heroi tem de saldo de **{saldoVitorias}** ele está no nível **{nivel}**"
 */

let saldoVitorias = calcularVitorias(1080, 900)
let nivelHeroi = (verificarNivel(saldoVitorias))

console.log(`O Heroi tem o saldo de vitórias: ${saldoVitorias} e ele está no nível ${nivelHeroi}`)

function calcularVitorias(vitorias, derrotas){
    let saldoRankeado = vitorias - derrotas
    return saldoRankeado
}

function verificarNivel(saldo){
    if(saldo <= 10){
        return "Ferro"
    } else if(saldo >= 11 && saldo <= 20){
        return "Bronze"
    } else if(saldo >= 21 && saldo <= 50){
        return "Prata"
    } else if(saldo >= 51 && saldo <= 80){
        return "Ouro"
    } else if(saldo >= 81 && saldo <= 90){
        return "Diamante"
    } else if(saldo >= 91 && saldo <= 100){
        return "Lendário"
    } else{
        return "Imortal"
    }
}
