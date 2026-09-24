const alunos = [
    { 
        nome: "Samuel", 
        idade: 26,
        notas: [1, 4, 1] 
    },
    {
        nome: "João", 
        idade: 20,
        notas: [5, 4, 3]
    },
    {
        nome: "Maria", 
        idade: 22,
        notas: [8.3, 9.9, 6.1]
    },
    {
        nome: "Pedro", 
        idade: 21,
        notas: [3.5, 6.8, 9.1]
    }
]
//console.log(alunos[3].idade, alunos[3].notas)
//console.log(alunos[3].nome, alunos[3].idade, alunos[3].notas[2])

// 
function calcularMedia(n1, n2, n3){
    const media = (n1+ n2 +n3) / 3
    return media.toFixed(2)

}
console.log(calcularMedia(7, 7, 7))

//laço de repetição for para percorrer o array de alunos e mostrar o nome e a media de cada aluno
for (let i = 0; alunos.length > i; i++){

    const aluno = alunos[i];

   const media = calcularMedia(aluno.notas[0], aluno.notas[1], aluno.notas[2])
   //console.log(`O aluno ${aluno.nome} a média é ${media}.`)
   if (media >= 6){
       console.log(`O aluno ${aluno.nome} foi aprovado.`)
      continue //continua para o IF ler todos os aprovados se colocar o  return ele volta.
      
   } 
    console.log(`O aluno ${aluno.nome} foi reprovado.`)
    
   }