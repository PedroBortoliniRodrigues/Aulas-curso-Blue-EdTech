console.log("Banco do Brasil");

let saque = parseInt(prompt("Digite o valor desejável para saque:"));




  if (saque > 0);{  

  cem = parseInt(saque/100)
  saque = saque % 100
    
  cinquenta = parseInt(saque/50)
  saque = saque % 50

  dez = parseInt(saque/10)
  saque = saque % 10

  cinco = parseInt(saque/5)
  saque = saque % 5

  um = parseInt(saque/1)
  saque = saque % 1

console.log(`Nota(s) R$ 100,00. ${cem} nota(s)`)
console.log(`Nota(s) R$ 50,00. ${cinquenta} nota(s)`)
console.log(`Nota(s) R$ 10,00. ${dez} nota(s)`)
console.log(`Nota(s) R$ 5,00. ${cinco} nota(s)`)
console.log(`Nota(s) R$ 1,00. ${um} nota(s)`)
}

