//Crie um algoritmo que calcule o valor total de uma locação, se a quantidade de dias for maior que 10
//aplicar um desconte de 50R$ no valor total

const dias = 12
const valorDia = 113.42

const calculo = dias * valorDia

if(dias > 10){ 
    console.log(`O valor total é ${calculo - 50}`)

} else{
    console.log(`Ò valor total é ${calculo}`)
}