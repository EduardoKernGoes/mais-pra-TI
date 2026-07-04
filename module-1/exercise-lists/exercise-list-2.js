const PROMPT = require('prompt-sync')();

function showExercise(numberExercise) {
    if(numberExercise === 0){
        console.log('------------------------------')
        console.log('Lista de Exercícios 2')
        console.log('------------------------------\n')
    }else{
        console.log('\n------------------------------')
        console.log(`Exercício nº${numberExercise}:`)
        console.log('------------------------------\n')
    }
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

function stringInput(message, validationFn = null, upperCase = true){
    let response
    do{
        console.log(message)
        upperCase ? response = PROMPT('').toUpperCase() : response = PROMPT('')
        if(validationFn && validationFn(response)){
            console.log('Valor inválido.\n')
            continue;
        }
        return response
    }while(true)
}

showExercise(0);
showExercise(1);

let response1;
do{
    let num1 = intInput('Digite um número para ver a tabuada do mesmo: ');

    for(let i = 1; i <= 10; i++){
        console.log(`O resultado de ${num1} x ${i} = ${num1 * i}`);
    }

    response1 = stringInput('Deseja ver a tabuada de outro número? (S/N)', (res) => res !== 'S' && res !== 'N' && res !== 'SIM');

}while(response1 === 'S' || response1 === 'SIM');

showExercise(2);

let num2 = intInput('Digite um número positivo para ver  quantidade de digitos que ele possui: ', true);
let numDigits2 = 0;

if(num2 === 0){
    numDigits2 = 1;
}else{
    while(num2 > 0){
        num2 = Math.floor(num2 / 10);
        numDigits2++;
    }
}
console.log(`O número digitado possui ${numDigits2} dígito(s).`);

showExercise(3);

let num3 = intInput('Quantos termos da sequência de Fibonacci deseja ver? ', true);

let arrayNum3 = []

for(let i = 0; i < num3; i++){
    if(i === 0 || i === 1){
        arrayNum3.push(1);
        continue;
    }else{
        arrayNum3.push(arrayNum3[i - 2] + arrayNum3[i - 1]);
    }
}
console.log(arrayNum3.join(', '))

showExercise(4)

let password4 = 'umasenha123';
let cont4 = 0;
let userAttempt4
do{
    userAttempt4 = PROMPT('Digite a senha:');
    cont4++;
    
    if(userAttempt4 === password4) break;

    if (cont4 < 3) console.log(`Senha incorreta, você tem mais ${3 - cont4} tentativa(s).\n`);
}while(cont4 < 3)

userAttempt4 === password4 ? console.log('Parabéns, você acertou a senha.') : console.log('Você excedeu o limite de tentativas.');

showExercise(5)

let num5 = intInput('Digite um número positivo maior que 2:', true, (response) => response <= 2);
let qntPrimes5 = 0

for(let i = 2; i <= num5; i++){
    let isPrime = true;
    for(let j = 2; j < i; j++){
        if(i % j === 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        console.log(i);
        qntPrimes5++;
    }
}

console.log(`A quantidade de números primos existentes entre o número 2 e o número ${num5} é: ${qntPrimes5}`)

showExercise(6);

let studentsList6 = [];
let classNote6 = 0;
let qntStudents6 = 5;
 
for(let i = 0; i < qntStudents6; i++){
    let studentName6 = stringInput('Digite o nome do estudante:', (response) => response.length <= 2);
    let studentNote6 = intInput('Digite a nota do aluno:', true, (response) => response > 10);
 
    studentName6 = studentName6.charAt(0).toUpperCase() + studentName6.slice(1).toLowerCase();
 
    let student6 = {name: studentName6, note: studentNote6};
    studentsList6.push(student6);
}
 
let bestNote6 = studentsList6[0].note;
let worstNote6 = studentsList6[0].note;
let bestStudent6 = studentsList6[0].name;
let worstStudent6 = studentsList6[0].name;  
 
console.log('\n--- Lista de Estudantes ---');
for(let student of studentsList6){
    console.log(`${student.name} tirou a nota: ${student.note}`);
    classNote6 += student.note;
 
    if(student.note > bestNote6){
        bestNote6 = student.note;
        bestStudent6 = student.name;
    }
 
    if(student.note < worstNote6){
        worstNote6 = student.note;
        worstStudent6 = student.name;
    }
}
 
console.log('\nA média da turma é: ' + (classNote6 / qntStudents6));
console.log(`Aluno com maior nota: ${bestStudent6} (${bestNote6})`);
console.log(`Aluno com menor nota: ${worstStudent6} (${worstNote6})`);

showExercise(7);

let response7;
let totalPrice7 = 0;
let personProducts7 = [];
let totalItems7 = 0;
 
do{
    response7 = stringInput("\nDigite o nome do produto (ou 'SAIR' para finalizar):", null, true);
 
    if(response7 === 'SAIR') break;
 
    let price7 = parseFloat(PROMPT('Digite o preço do produto: R$ '));
    while(isNaN(price7) || price7 <= 0){
        console.log('Valor inválido.\n');
        price7 = parseFloat(PROMPT('Digite o preço do produto: R$ '));
    }
 
    totalPrice7 += price7;
    totalItems7++;
 
    let existingProduct7 = personProducts7.find(p => p.name === response7);
    if(existingProduct7){
        existingProduct7.qnt++;
    }else{
        personProducts7.push({ name: response7, price: price7, qnt: 1 });
    }
 
}while(true);
 
let cont7 = 1;
console.log('\nSua lista de compras:')
for(let product of personProducts7){
    console.log(`Item ${cont7}\n   Nome: ${product.name}\n   Preço Unitário: R$${product.price.toFixed(2)}\n   Quantidade: ${product.qnt}`);
    cont7++;
}
 
let subtotal7 = totalPrice7;
console.log(`\nSubtotal: R$${subtotal7.toFixed(2)}`);
 
if(totalItems7 > 3){
    let discount7 = totalPrice7 * 0.10;
    totalPrice7 -= discount7;
    console.log(`Desconto de 10% aplicado: -R$${discount7.toFixed(2)}`);
}
 
console.log(`Valor total a pagar: R$${totalPrice7.toFixed(2)}`);

showExercise(8)

let inverseWord = '';

let word = stringInput('Digite uma palavra', null, false);

let arrayChars = [...word];

console.log(`A palavra original é: ${word}`)

for(let i = arrayChars.length; i > 0; i--){
    inverseWord += arrayChars[i-1];
}

console.log(`A palavra ${word} invertida fica: ${inverseWord}`)

if(word === inverseWord){
    console.log(`A palavra ${word} é um palíndromo`);
}else{
    console.log(`A palavra ${word} não é um palíndromo`);
}

showExercise(9)

let randomNum9 = Math.floor(Math.random() * 100) + 1;
let response9;
let attemp = 0;
let registerAttemps = [];

do{
    if(response9){
        response9 > randomNum9 ? console.log('O número é menor.') : console.log('O número é maior.')
    }

    response9 = intInput('Tente adivinhar o número (1-100): ', true, (response) => response > 100 || response === 0);
    attemp++;
    registerAttemps.push(response9);

}while(response9 !== randomNum9);

console.log(`Você tentou ${attemp} vez(es) até acertar o número.`);
console.log(`Estas foram as suas tentativas: ${registerAttemps.join()}`)

showExercise(10);

let students = [];
let allStudentsNote = 0;
let bestNote = 0;
let bestStudents = [];
 
for(let i = 0; i < 3; i++){
 
    let studentName = stringInput('Digite o nome do aluno: ', (response) => response.length < 3, false);
 
    let student = {
        name: studentName,
        notes: [],
        average: 0,
    };
 
    let studentNoteSum = 0;
 
    for(let j = 1; j <= 4; j++){
        let studentNote = intInput(`Digite a ${j}ª nota do aluno: `, true, (response) => response > 10);
        studentNoteSum += studentNote;
        student.notes.push(studentNote);
    }
 
    student.average = studentNoteSum / 4;
    allStudentsNote += studentNoteSum;
 
    if(student.average > bestNote){
        bestNote = student.average;
        bestStudents = [studentName];
    }else if(student.average === bestNote){
        bestStudents.push(studentName);
    }
 
    students.push(student);
}
 
console.log('Alunos, suas notas e sua média geral:')
for(let student of students){
    console.log(`\nNome: ${student.name}`);
    console.log('Notas:')
    console.log(`   ${student.notes.join(', ')}`)
    console.log(`Média: ${student.average.toFixed(2)}`)
}
 
console.log(`\nMédia geral da turma: ${(allStudentsNote / (3 * 4)).toFixed(2)}`)
console.log(`Melhor(es) aluno(s): ${bestStudents.join(', ')}`)