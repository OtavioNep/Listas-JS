// Ex 1 ----------------------------------------------------------------------
let primeiroNumero = Math.round(Math.random()*20)
let segundoNumero = Math.round(Math.random()*20)
let terceiroNumero = Math.round(Math.random()*20)
let quartoNumero = Math.round(Math.random()*20)
let quintoNumero = Math.round(Math.random()*20)
let total = 0
console.log(primeiroNumero, segundoNumero, terceiroNumero, quartoNumero, quintoNumero)

if (primeiroNumero > 10)
    total++

if (segundoNumero > 10) 
    total++

if (terceiroNumero > 10)
    total++

if (quartoNumero > 10)
    total++

if (quintoNumero > 10)
    total++

console.log(total)

console.log('Ex 2 ---------------------------------------------------------------------------------------------------------------') 


let primeiroNumeroMedia = Math.round(Math.random()*20)
let segundoNumeroMedia = Math.round(Math.random()*20)
let terceiroNumeroMedia = Math.round(Math.random()*20)
let quartoNumeroMedia = Math.round(Math.random()*20)
let quintoNumeroMedia = Math.round(Math.random()*20)
let media = (primeiroNumeroMedia + segundoNumeroMedia + terceiroNumeroMedia + quartoNumeroMedia + quintoNumeroMedia) / 5
console.log(primeiroNumeroMedia, segundoNumeroMedia, terceiroNumeroMedia, quartoNumeroMedia, quintoNumeroMedia)
console.log(`A média é ${media}`)

if (primeiroNumeroMedia > media)
    console.log(primeiroNumeroMedia)

if (segundoNumeroMedia > media) 
    console.log(segundoNumeroMedia)

if (terceiroNumeroMedia > media)
    console.log(terceiroNumeroMedia)

if (quartoNumeroMedia > media)
    console.log(quartoNumeroMedia)

if (quintoNumeroMedia > quintoNumeroMedia)
    console.log(quintoNumeroMedia)


console.log('Ex 3------------------------------------------------------------------------------------------------------')

let numero = Math.round(Math.random()*500)
console.log(numero)

if (numero > 100 && numero < 200)
    console.log(`O numero esta no intervalo desejado`)
else
    console.log(`O numero não está no intervalo desejado`)


console.log('Ex 4 -------------------------------------------------------------------------------------------------------------')

let pesoTerra = Math.round(Math.random()*200)
let pesoPlaneta = 0
let numeroPlaneta = (Math.round(Math.random()*5)) + 1

console.log(`Peso na Terra: ${pesoTerra}`)
console.log(`Numero do Planeta: ${numeroPlaneta}`)

if (numeroPlaneta === 1) {
    pesoPlaneta = (pesoTerra / 100) * 0.37
}

else if (numeroPlaneta === 2) {
    pesoPlaneta = (pesoTerra / 100) * 0.88
}

else if (numeroPlaneta === 3) {
    pesoPlaneta = (pesoTerra / 100) * 0.38
}

else if (numeroPlaneta === 4) {
    pesoPlaneta = (pesoTerra / 100) * 2.64
}

else if (numeroPlaneta === 5) {
    pesoPlaneta = (pesoTerra / 100) * 1.15
}

else {
    pesoPlaneta = (pesoPlaneta / 100) * 1.17
}

let pPlaneta = pesoPlaneta.toFixed(2)
console.log(`Peso no Planeta: ${pPlaneta}`)


console.log('Ex 5 ---------------------------------------------------------------------------------------------------------------------------------------')

let saldoMedio = Math.round(Math.random()*50000)
let creditoEspecial = 0
console.log(`Saldo Médio: ${saldoMedio}`)

if (saldoMedio <= 2000) {
    creditoEspecial = 0
}
else if (saldoMedio <= 10000) {
    creditoEspecial = saldoMedio * 0.20
}
else if (saldoMedio <= 20000) {
    creditoEspecial = saldoMedio * 0.30
}
else {
    creditoEspecial = saldoMedio * 0.40
}

console.log(`Credito Especial: ${creditoEspecial.toFixed(2)}`)


console.log('EX 6 ----------------------------------------------------------------------------------------------------------------------------')

let peso = Math.round(Math.random()*200)
let altura = ((Math.random()*2)+1).toFixed(2)
let imc = peso / (altura * altura)
let resultado

console.log(`Peso = ${peso}`)
console.log(`altura = ${altura}`)
console.log(`IMC = ${imc.toFixed(2)}`)

if (imc <= 18.5) {
    resultado = 'Abaixo do Peso'
}
else if (imc <= 25) {
    resultado = 'Peso Normal'
}
else if (imc <= 30) {
    resultado = 'Sobrepeso'
}
else if (imc <= 35) {
    resultado = 'Obeso Leve'
}
else if (imc <= 40) {
    resultado = 'Obeso Moderado'
}
else {
    resultado = 'Obesidade Mórbida'
}

console.log(`Resultado do IMC = ${resultado}`)