"use strict";
function password(username) {
    let msg = "bem vindo " + username;
    console.log(msg);
    return username;
}
const userNameLogin = password("raylan");
console.log(userNameLogin);
let n1 = 10;
let n2 = 10;
function soma(valor1, valor) {
    let somaDosValores = valor1 + valor2;
    if (somaDosValores > 40) {
        return 'soma maior que 40';
    }
    else {
        return 'soma menor que 40';
    }
}
console.log(soma(n1, n2));
