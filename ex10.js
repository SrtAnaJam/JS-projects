const user = {
    nome: "Jamille",
    email: "anajamillef@gmail.com",
    senha: "123456"
}


const email = "anajamillef@gmail.com"

const senha = "123456"

// Codigo escrito de outra forma!!
// if (email !== user.email || senha !== user. senha){
//     console.log("Email ou senha inválidos!")
//     return
// }

if (user.email == email && user.senha === senha){
 console.log(`${user.nome} seja bem vindo!`)
    return
}

console.log("Email ou senha não conferem!")