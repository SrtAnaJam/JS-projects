//crie um algoritmo que calcule o valor total de uma locação
// se a quantidade de dias for maior que 10
//aplicar um desconto de 15% no valor total
//aplicar um acrescimo de 20% no valor total se for menor que 5 dias

const dias = 7
const valorDia = 135.33

let calculo = dias * valorDia

if (dias > 10){
    const desconto = calculo * 0.15
    
    calculo = calculo - desconto
}
if (dias < 5){
    const acrescimo = calculo * 0.20
    calculo = calculo + acrescimo
}
console.log(`O valor total é ${calculo.toFixed(2)}`)