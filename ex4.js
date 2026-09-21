//Crie um algoritmo que calcule a area da parede o valor do pintor
//e a quantidade de tinta necessaria em baldes

const altura = 3
const largura = 5
const valorPintor = 15
const rendimentoTinta = 12 // m² por balde

const tamanho = altura * largura
const pintor = tamanho * valorPintor
const tinta = tamanho / rendimentoTinta

console.log(`O tamanho da parede é ${tamanho}, 
    o pintor vai cobrar ${pintor.toFixed(2)}, 
    e vai ser necessario ${Math.ceil(tinta)}.`)