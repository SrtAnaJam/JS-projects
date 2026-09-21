//Crie um algoritmo que calcula a área da parede e o valor do pintor

const altura = 3
const  largura = 5
const valorPintor = 15
const tamParede = (altura * largura)
const valorFinal = (tamParede * valorPintor)
console.log (`A altura da parede é ${tamParede}m², e o Pintor cobrará R$${valorFinal.toFixed(2)}.`)