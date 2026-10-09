alert("Bem-vindos a aula de SWitch Case!!!")
let num1 = Number(prompt("Insira o primeiro número"))
let num2 = Number(prompt("Insira o segundo número"))
let soma, mult

let escolha = Number(prompt("Digite 1 para soma ou 2 para multipricação"))

switch(escolha){
    case 1:{
        soma = num1 + num2
        alert(`Você escolheu soma. A soma dos números é ${soma}`)
    }
      break
      case 2:{
        mult = num1 * num2
        alert(`Você escolheu multiplicação. O produto dos números é ${mult}`)
    }
      break
      default: alert(`ERROR! Opção inválida`)
    
}