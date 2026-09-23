const user = {
    nome : "Jamille",
    idade: 40,
    cores: ["azul","verde","amarelo"],
    carro: {
        marca: "BMW",
        modelo: "X5",
        ano: 2025,
        cor: "preto",
        combustivel: ['gasolina',"etanol","eletrico"]
    }
}

//console.log(user.nome)
//console.log(user.cores[2])
//console para mostrar a marca, modelo e ultimo combustivel do carro

console.log(`A marca do carro é ${user.carro.marca}, o modelo é ${user.carro.modelo}, e é ${user.carro.combustivel[2]}.`)