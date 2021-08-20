console.log('Programa de reajuste! ');


let salario = parseFloat(prompt('Digite seu salário: R$'));

if (salario <= 279) {

  let reajuste = salario * 1.2
  console.log(`O salario antes do reajuste é: R$${salario}`)
  console.log('O salário teve um aumento de 20% ')
  console.log(`Você receberá um aumento de R$:${salario*0.2}`)
  console.log(`O seu novo salário é de R$${reajuste}`)
};

else if (salario <=280 && 699 ) {

  let reajuste = salario * 1.2
  console.log(`O salario antes do reajuste é: R$${salario}`)
  console.log('O salário teve um aumento de 15% ')
  console.log(`Você receberá um aumento de R$:${salario*0.15}`)
  console.log(`O seu novo salário é de R$${reajuste}`)
};

else if (salario <=700 && 1500 ) {

  let reajuste = salario * 1.2
  console.log(`O salario antes do reajuste é: R$${salario}`)
  console.log('O salário teve um aumento de 10% ')
  console.log(`Você receberá um aumento de R$:${salario*0.1}`)
  console.log(`O seu novo salário é de R$${reajuste}`)
};

else  (salario > 1500 ) {

  let reajuste = salario * 1.2
  console.log(`O salario antes do reajuste é: R$${salario}`)
  console.log('O salário teve um aumento de 5% ')
  console.log(`Você receberá um aumento de R$:${salario*0.05}`)
  console.log(`O seu novo salário é de R$${reajuste}`)
};











