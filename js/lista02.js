console.log('EX 1---------------------------------')
let numeroUsuario = window.prompt('digite um numero')
console.log(numeroUsuario)

let numberConvertido = parseInt(numeroUsuario)

let valorSucessor = numberConvertido + 1
console.log(valorSucessor)

let valorAntecessor = numberConvertido - 1
console.log(valorAntecessor)

let dobroValor = numberConvertido * 2
console.log(dobroValor)

let metadeValor = numberConvertido / 2
console.log(metadeValor)

console.log('EX 2----------------------------------')

let conversorTemperatura = window.prompt('Temperatuta em Celcius:')
let temperaturaConvertida = parseInt(conversorTemperatura)

let fahrenheit = 9 / 5 * temperaturaConvertida + 32
console.log(fahrenheit)

console.log('EX 3--------------------------------------')

let valorConta = window.prompt('Qual foi o valor da conta:')
let valorContaConvertido = parseInt(valorConta)
console.log(valorContaConvertido)

let valorServico = (valorConta * 10) / 100
let valorServicoConvertido = parseInt(valorServico)
console.log(valorServicoConvertido)

let valorTotal = valorContaConvertido + valorServicoConvertido
console.log(valorTotal)

console.log('EX 4------------------------------------------')

let primeiroInteiro = window.prompt('Insira um numero inteiro:')
let segundoInteiro = window.prompt('Insira outro numero inteiro:')
let primeiroInteiroConvertido = parseInt(primeiroInteiro)
let segundoInteiroConvertido = parseInt(segundoInteiro)

if (primeiroInteiroConvertido > segundoInteiroConvertido && primeiroInteiroConvertido !== segundoInteiroConvertido)
    console.log('o primeiro número é maior')
else if(primeiroInteiroConvertido < segundoInteiroConvertido)
    console.log('o segundo número é maior')
else if (primeiroInteiroConvertido == segundoInteiroConvertido)
    console.log('os números são iguais')
else
    console.log('os números são diferentes')

console.log('EX 5-------------------------------------')

let nomeFuncionario = window.prompt('Qual é o nome do funcionário?')
let horasTrabalhadas = window.prompt('Quantas horas o funcionário trabalhou?')
let quantidadeDependentes = window.prompt('Quantos dependentes o funcionário tem?')

let horasTrabalhadasConvertidas = parseInt(horasTrabalhadas)
let quantidadeDependentesConvertidos = parseInt(quantidadeDependentes)

let salarioBruto = horasTrabalhadasConvertidas * 154 + quantidadeDependentesConvertidos * 280
console.log(`O sálario bruto de ${nomeFuncionario} é ${salarioBruto}`)













