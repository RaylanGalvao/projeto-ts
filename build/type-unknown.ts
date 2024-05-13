let total: unknown
total = 150
total = "350"
total = {
    total: 150,
}

let idPedido: any = 123
let totalPedido: unknown = 15

let entregador: number = idPedido

let totalEntrega: any /*como vou receber um tipo desconhecido tenho que mostrar como desconhecido*/  = totalPedido

console.log(total)
console.log(entregador)
console.log(totalEntrega)