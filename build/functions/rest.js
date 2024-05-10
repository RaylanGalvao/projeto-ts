"use strict";
function totalVendas(...vendas) {
    const quantidadeVendas = vendas.length;
    console.log(`voce fez ${quantidadeVendas} vendas hoje`);
}
function mostraNomes(...nome) {
    let totalNomes = nome.length;
    console.log("total de nomes:", totalNomes);
    nome.map(nome => {
        console.log(nome);
    });
}
mostraNomes("backEnd", "frontEnd", "fullStak");
