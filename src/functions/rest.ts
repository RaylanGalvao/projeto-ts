// sem o operador rest

// function totalVendas(venda1:number, venda2: number, venda3:number, venda4: number): number{
//     const total = venda1 + venda2 + venda3 +venda4
//     console.log(total)
//     return total
// }
// totalVendas(10, 30, 50, 10)

// usando rest com numeros

function totalVendas(...vendas: number[]):void{
    const quantidadeVendas = vendas.length

    console.log(`voce fez ${quantidadeVendas} vendas hoje`)

}

// totalVendas(10,30,20,50,60,10)

function mostraNomes(...nome:string[]){
    let totalNomes = nome.length
    console.log("total de nomes:",totalNomes)
    // console.log(nome.length)
    nome.map (nome => {
        console.log(nome)
    })
}

mostraNomes("backEnd", "frontEnd", "fullStak")