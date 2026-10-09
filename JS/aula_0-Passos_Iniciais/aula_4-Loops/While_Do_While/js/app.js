let num1, num2,soma, mult,escolha, loop

 
 
alert("Bem-vindos a aula de SWitch Case!!!")
do{
    
    num1 = Number(prompt("Insira o primeiro número"))
    num2 = Number(prompt("Insira o segundo número"))
    escolha =  Number(prompt("Digite 1 para soma ou 2 para multiplicação"))



    

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
  loop = Number(prompt(`Deseja tentar novamente?
    1 - Sim
    0 - Não`
    ))
while(loop == 1 )
