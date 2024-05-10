// como deixar um valor por default ou deixar ele opcional~

// function cadastro(email:string, senha: string, nome = "aluno", idade?:number): void{

//     let data = {email, senha, nome, idade}
//     console.log(data)

// }

// cadastro("jrdsg.com", "2024", "frontEnd", 30)

function cadastroLoj(apelido:string, codigo:string, status = false):boolean{
    console.log("status atual da loja", status)
    return status
}
cadastroLoj("burgue raylan", "r@burgue.com", true)