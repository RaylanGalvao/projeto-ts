let statusAtual: unknown = 50
let mmudarStatus: number = 0

// estou afirmando que o statusAtual e de fato um numero
mmudarStatus = statusAtual as number

//outra maneira de afirma o tipo

mmudarStatus = <number>statusAtual

console.log(mmudarStatus)


let query: unknown = "churrasco"
let tipoComida: string = query as string
console.log(tipoComida)