const PROMPT = require('prompt-sync')();

//Fiz os exercícios um pouco diferente do solicitado pois, como já tenho um certo conhecimento em relação à lógica e à linguagem JS em si, aproveitei para estudar e exercitar um pouco a mente, buscando usar somente o que já foi passado em aula. Além disso, busquei utilizar as nomenclaturas todas em inglês pois, como estou fazendo curso de inglês, pratico escrevendo os códigos em inglês.

//Função simples para imprimir a separação dos exercícios, dentro tem uma lógica simples para imprimir junto o título da lista aproveitando que segue o mesmo padrão
function showExercise(numberExercise) {
    if(numberExercise === 0){
        console.log('------------------------------')
        console.log('Lista de Exercícios 1')
        console.log('------------------------------\n')
    }else{
        console.log('------------------------------')
        console.log(`Exercício nº${numberExercise}:`)
        console.log('------------------------------\n')
    }
}

//Funções que fiz para receber atributos como, mensagem para exibir ao usuário, verificar se o número é positivo ou não (no caso dos inteiros e pontos flutuantes) e possíveis funções de validação, se necessárias.
function floatInput(message, mustBePositive, validationFn = null){
    let num
    do{
        num = parseFloat(PROMPT(message))
        if(isNaN(num) || (mustBePositive && num < 0) || (validationFn && validationFn(num))){
            console.log('Valor inválido.\n')
            continue;
        }
        return num;
    }while(true)
}

function intInput(message, mustBePositive, validationFn = null){
    let num
    do{
        num = parseInt(PROMPT(message))
        if(isNaN(num) || (mustBePositive && num < 0) || (validationFn && validationFn(num))){
            console.log('Valor inválido.\n')
            continue;
        }
        return num;
    }while(true)
}

function stringInput(message, validationFn = null){
    let response
    do{
        console.log(message)
        response = PROMPT('').toUpperCase()
        if(validationFn(response)){
            console.log('Valor inválido.\n')
            continue;
        }
        return response
    }while(true)
}

showExercise(0)
showExercise(1)

let studentGrade = floatInput('Digite a nota do aluno (0-10): ', true, (num) => num > 10 ? true : false)

switch(true){
    case studentGrade >=7:
        console.log('Aluno aprovado!\n')
        break;
    case studentGrade <= 6.9 && studentGrade >= 5:
        console.log('Aluno em recuperação!\n')
        break;
    case studentGrade < 5:
        console.log('Aluno reprovado!\n')
        break;
}

showExercise(2)

let dateNow = new Date()
let age
let day
let month
let year
let birthDate

//Não consegui implementar a lógica das funções neste exercício pois ele tem mais lógicas de validação depois da atribuição dos valores de day, month e year.
do{
    birthDate = PROMPT('Digite a sua data de nascimento (dd/mm/aaaa): ')
    const dateParts = birthDate.split('/')

    if(dateParts.length !== 3){
        console.log('Formato de data inválido. Por favor, siga o formato indicado\n')
        continue;
    }else{
        day = parseInt(dateParts[0])
        month = parseInt(dateParts[1])
        year = parseInt(dateParts[2])
    }

    if(isNaN(day) || isNaN(month) || isNaN(year)){
        console.log('Data inválida. Digite apenas números (separados por "/").\n')
        continue;
    }

    if(day < 1 || day > 31 || month < 1 || month > 12 || year >= dateNow.getFullYear()){
        console.log('Data inválida. Verifique os valores digitados.\n')
        continue;
    }

    if(
        ((month === 2 && day >= 29) && !((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))) ||
        (month === 4 || month === 6 || month === 9 || month === 11) && day > 30
    ){
        console.log('Data inválida. Verifique os valores digitados.\n')
        continue;
    }else{
        break;
    }
}while(true)

if(month > dateNow.getMonth() + 1 || (month === dateNow.getMonth() + 1 && day > dateNow.getDate())){
    age = dateNow.getFullYear() - year - 1
}else{
    age = dateNow.getFullYear() - year
}

console.log(`Você tem ${age} ano(s).`)

switch(true){
    case age <= 12:
        console.log(`Você é uma criança.\n`)
        break;

    case age <= 17:
        console.log(`Você é um adolescente.\n`)
        break;

    case age <= 59:
        console.log(`Você é um adulto.\n`)
        break;

    default:
        console.log(`Você é uma pessoa idosa.\n`)
}

showExercise(3)

let salaryEmployee = floatInput('Digite o salário do funcionário: ', true)
let percentageIncrease = intInput('Digite o percentual de aumento (ex: 10 para 10%): ', true)


salaryEmployee < 1500 ? percentageIncrease *= 2 : percentageIncrease = percentageIncrease

salaryEmployee += (salaryEmployee * percentageIncrease) / 100

console.log(`\nO novo salário do funcionário é: R$${salaryEmployee.toFixed(2)}.\n`)

showExercise(4)
let numbers = []
let biggestNumber

for(let i = 1; i <= 3; i++){
    let num = intInput('Digite um número: ', false)
    numbers.push(num)
}

console.log(`\nVocê digitou os números: ${numbers}`)

numbers.forEach(num => num > biggestNumber || biggestNumber === undefined ? biggestNumber = num : biggestNumber = biggestNumber)

console.log(`O maior número digitado foi: ${biggestNumber}.\n`)

showExercise(5)

let totalValue = floatInput('Digite o valor total da compra: ', true)

switch(true){
    case totalValue < 100:
        console.log(`Você não recebeu nenhum desconto.\nO valor total da sua compra ficou em: R$${totalValue.toFixed(2)}.\n`);
        break;

    case totalValue >= 100 && totalValue <= 299.99:
        console.log(`Você recebeu um desconto de 10%.\nO valor total da sua compra ficou em: R$${(totalValue - ((totalValue * 10) / 100)).toFixed(2)}.\n`);
        break;

    case totalValue >= 300 && totalValue <= 499.99:
        console.log(`Você recebeu um desconto de 15%.\nO valor total da sua compra ficou em: R$${(totalValue - ((totalValue * 15) / 100)).toFixed(2)}.\n`);
        break;

    case totalValue >= 500:
        console.log(`Você recebeu um desconto de 20%.\nO valor total da sua compra ficou em: R$${(totalValue - ((totalValue * 20) / 100)).toFixed(2)}.\n`);
        break;
}

showExercise(6)

let value = intInput('Digite quanto deseja sacar (valor múltiplo de 10): ', true, (num) => num % 10 !== 0 ? true : false)
let notes = {'100': 0, '50': 0, '20': 0, '10': 0}

console.log(`Você sacou R$${value} reais.`)

while(value > 0){
    switch(true){
        case value >= 100:
            notes['100']++
            value -= 100
            break;

        case value >= 50:
            notes['50']++
            value -= 50
            break;

        case value >= 20:
            notes['20']++
            value -= 20
            break;

        case value >= 10:
            notes['10']++
            value -= 10
            break;
    }
}

console.log('Notas entregues: ')

notes['100'] > 0 ? console.log(`R$100: ${notes['100']} unidade(s)`) : null
notes['50'] > 0 ? console.log(`R$50: ${notes['50']} unidade(s)`) : null
notes['20'] > 0 ? console.log(`R$20: ${notes['20']} unidade(s)`) : null
notes['10'] > 0 ? console.log(`R$10: ${notes['10']} unidade(s)`) : null

showExercise(7)

let num1, num2
let operation = stringInput(
    'Qual operação que deseja realizar: ',
    (response) => response !== '+'  && response !== '-' && response !== '*' && response !== '/' ? true : false
)

switch(operation){
    case '+':
        num1 = floatInput('Digite o número inicial da adição: ', false)
        num2 = floatInput(`Digite o número que deseja adicionar a ${num1}: `, false)

        console.log(`\n${num1} + ${num2} = ${num1 + num2}\n`)
        break;

    case '-':
        num1 = floatInput('Digite o número inicial da subtração: ', false)
        num2 = floatInput(`Digite o número que deseja subtrair de ${num1}: `, false)
        
        console.log(`\n${num1} - ${num2 < 0 ? '(' + num2 + ')' : num2} = ${num1 - num2}\n`)
        break;

    case '*':
        num1 = floatInput('Digite o número inicial da multiplicação: ', false)
        num2 = floatInput(`Digite o número que deseja multiplicar por ${num1}: `, false)
        
        console.log(`\n${num1} x ${num2} = ${num1 * num2}\n`)
        break;

    case '/':
        num1 = floatInput('Digite o dividendo da divisão: ', false)
        num2 = floatInput('Digite o divisor da divisão: ', false, (num) => num === 0 ? true : false)
        console.log(`\n${num1} ÷ ${num2} = ${num1 / num2}. Com resto ${num1 % num2}\n`)
        break;
}

showExercise(8)

let pizzaPrice
let pizzaSize = stringInput(
    'Digite o tamanho da pizza que deseja pedir:\nP - R$25,00\nM - R$35,00\nG - R$45,00\n',
    (response) => response !== 'P' && response !== 'M' && response !== 'G' ? true : false
)
let isBorderStuffed = stringInput(
    'Deseja a borda recheada no valor adicional de R$8,00? (S/N): ',
    (response) => response !== 'S' && response !== 'N' && response !== 'SIM' && response !== 'NAO' && response !== 'NÃO' ? true : false
)

if(isBorderStuffed === 'S' || isBorderStuffed === 'SIM'){
    isBorderStuffed = true;
}else{
    isBorderStuffed = false;
}

switch(pizzaSize){
    case 'P':
        pizzaPrice = 25
        break;
    case 'M':
        pizzaPrice = 35
        break;
    case 'G':
        pizzaPrice = 45
        break;
}

isBorderStuffed ? pizzaPrice += 8 : null

console.log(`\nO valor da sua pizza ficou em: R$${pizzaPrice.toFixed(2)}.\n`)

showExercise(9)

month = intInput('Digite o número do mês (1-12): ', true, (num) => num < 1 || num > 12 ? true : false)
let isYearLeap

if(month === 2){
    isYearLeap = stringInput(
        'O ano é bissexto? (S/N): ',
        (response) => response !== 'S' && response !== 'N' && response !== 'SIM' && response !== 'NAO' && response !== 'NÃO' ? true : false
    )

    if(isYearLeap === 'S' || isYearLeap === 'SIM'){
        isYearLeap = true;
    }else{
        isYearLeap = false;
    }
}

switch(month){
    case 1:
        console.log(`${month} corresponde a Janeiro. Este mês tem 31 dias\n`)
        break;

    case 2:
        console.log(`${month} corresponde a Fevereiro. Este mês tem ${isYearLeap ? '29' : '28'} dias\n`)
        break;

    case 3:
        console.log(`${month} corresponde a Março. Este mês tem 31 dias\n`)
        break;

    case 4:
        console.log(`${month} corresponde a Abril. Este mês tem 30 dias\n`)
        break;

    case 5:
        console.log(`${month} corresponde a Maio. Este mês tem 31 dias\n`)
        break;

    case 6:
        console.log(`${month} corresponde a Junho. Este mês tem 30 dias\n`)
        break;

    case 7:
        console.log(`${month} corresponde a Julho. Este mês tem 31 dias\n`)
        break;

    case 8:
        console.log(`${month} corresponde a Agosto. Este mês tem 31 dias\n`)
        break;

    case 9:
        console.log(`${month} corresponde a Setembro. Este mês tem 30 dias\n`)
        break;

    case 10:
        console.log(`${month} corresponde a Outubro. Este mês tem 31 dias\n`)
        break;

    case 11:
        console.log(`${month} corresponde a Novembro. Este mês tem 30 dias\n`)
        break;

    case 12:
        console.log(`${month} corresponde a Dezembro. Este mês tem 31 dias\n`)
        break;
}

showExercise(10)

let hours = floatInput(
    'Digite o número de horas que o carro ficou estacionado: ',
    true,
    (num) => num === 0 ? true : false
)

switch(true){
    case hours <= 1:
        console.log(`Você ficou ${hours} hora estacionado.\nO valor a ser pago é de R$8.00.\n`)
        break;

    case hours <= 2:
        console.log(`Você ficou ${hours} horas estacionado.\nO valor a ser pago é de R$14.00.\n`)
        break;

    case hours <= 3:
        console.log(`Você ficou ${hours} horas estacionado.\nO valor a ser pago é de R$18.00.\n`)
        break;

    case hours > 3:
        console.log(`Você ficou ${hours} horas estacionado.\nO valor a ser pago é de R$${(4 + (2 * (hours - 3))).toFixed(2)}.\n`)
        break;
}