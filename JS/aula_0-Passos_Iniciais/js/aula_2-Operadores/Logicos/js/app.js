/*
Operadores Logicos

&& -> (and/e)
|| -> (or/ou)
! -> (not/negado)
*/

//Exemplo simples
let num1 = 10
let num2 = 15
let num3 = 2

console.log("Condição simples")

if(num1 >- num2){
    console.log("Entrou no IF")

} else{
    console.log("Entrou no Else")
}

//Condição Composta

console.log("Condição Composta")

if(num1 != num2 && (num1>num3)) {
    console.log("Entrou no IF")

} else{
    console.log("Entrou no Else")
}

//Condição tripla

console.log("Condição Composta")

if(num1 != num2 && (num1>num3) || (num1<num3)) {
    console.log("Entrou no IF")

} else{
    console.log("Entrou no Else")
}