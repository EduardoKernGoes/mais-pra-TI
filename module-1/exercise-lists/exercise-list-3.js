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

let product1 = {'Nome': 'Maçã', 'Preço': 5.09, 'Categoria': 'Frutas', 'Quantidade': 5}

console.log('Informações do produto:')
for (let key in product1) {
    console.log(key + ':', product1[key])
}

product1['Desconto'] = 10;

let productValue1 = (product1['Preço'] * product1['Quantidade']);

console.log('\nO valor do produto (com desconto) é de: R$' + (productValue1 - ((product1['Desconto'] * productValue1) / 100)).toFixed(2))

showExercise(2);

let characters = [
    {
        'Nome': 'Jogador 1',
        'Vida': '160',
        'Ataque': '25',
        'Defesa': '46'
    },
    {
        'Nome': 'Jogador 2',
        'Vida': '241',
        'Ataque': '34',
        'Defesa': '11'
    }
];

let fullPowerCharacter1 = 0;
let fullPowerCharacter2 = 0;

for (let key in characters[0]) {
    console.log(key.padEnd(10) + '' + characters[0][key].padEnd(10), '|', characters[1][key].padStart(10));
    if(key !== 'Nome'){
        fullPowerCharacter1 += parseInt(characters[0][key]);
        fullPowerCharacter2 += parseInt(characters[1][key]);
    }
}

console.log('\nPoder total do ' + characters[0]['Nome'] + ':' + fullPowerCharacter1);
console.log('Poder total do ' + characters[1]['Nome'] + ':' + fullPowerCharacter2);

if(fullPowerCharacter1 > fullPowerCharacter2){
    console.log('O jogador ' + characters[0]['Nome'] + ' é o mais forte!!!');
}else if(fullPowerCharacter2 > fullPowerCharacter1){
    console.log('O jogador ' + characters[1]['Nome'] + ' é o mais forte!!!');
}else{
    console.log('Os jogadores ' + characters[0]['Nome'] + ', ' + characters[1]['Nome'] + ' tem o mesmo nível de poder')
}

showExercise(3)

let employee = {
    'Nome': 'Carlos',
    'Cargo': 'Repositor',
    'Salário': 2300,
    'Anos de Experiência': 8
}

console.log('Informações do funcionário:')

for (const key in employee) {
    if(key === 'Salário'){
        console.log(key + ': R$' + (employee[key]).toFixed(2))
        continue;
    }else if(key === 'Anos de Experiência'){
        console.log(key + ': ' + employee[key] + ' anos')
        continue;
    }

    console.log(key + ': ' + employee[key]);
}

if(employee['Anos de Experiência'] <= 2){
    let bonus = (5 * employee['Salário']) / 100;
    console.log('\nO usuário possui um bônus de 5% do salário.')
    console.log(`\nBônus anual: R$${bonus.toFixed(2)}`)
}else if(employee['Anos de Experiência'] <= 5){
    let bonus = (10 * employee['Salário']) / 100;
    console.log('\nO usuário possui um bônus de 10% do salário.')
    console.log(`\nBônus anual: R$${bonus.toFixed(2)}`)
}else{
    let bonus = (15 * employee['Salário']) / 100;
    console.log('\nO usuário possui um bônus de 15% do salário.')
    console.log(`\nBônus anual: R$${bonus.toFixed(2)}`)
}

showExercise(4);

let inventory = {
    'Poção de cura': 8,
    'Poção de força': 3,
    'Poção de regenerar mana': 4,
    'Adaga curta': 2,
    'Curativo': 23
}
let response;
let inventoryKeys = Object.keys(inventory);

do{
    let counter = 1;

    console.log(response === undefined ? 'Inventário do personagem:' : '\nInventário atualizado:')

    for (const item in inventory) {
        console.log(`    ${counter} - ${inventory[item]}x ${item}`)
        counter++;
    }

    response = intInput('Digite o número do item que deseja usar ou "0" para sair:', true, (response) => response > Object.keys(inventory).length)

    if(response !== 0){
        if(inventory[inventoryKeys[response - 1]] === 0){
            console.log('\nItem esgotado');
        }else{
            inventory[inventoryKeys[response - 1]] -= 1;
        }
    }

}while(response !== 0);

showExercise(5);

let budget = {
    'alimentação': {
        'Valor Planejado': 1200,
        'Valor Gasto': 985
    },
    'transporte': {
        'Valor Planejado': 300,
        'Valor Gasto': 290
    },
    'saúde': {
        'Valor Planejado': 630,
        'Valor Gasto': 650
    },
    'lazer': {
        'Valor Planejado': 235,
        'Valor Gasto': 120
    },
    'educação': {
        'Valor Planejado': 150,
        'Valor Gasto': 310
    }
}
let monthBalance = 0;

for (const item in budget) {
    if(budget[item]['Valor Planejado'] < budget[item]['Valor Gasto']){
        console.log(`O gasto em ${item} esse mês foi acima do esperado.`);
        monthBalance -= budget[item]['Valor Gasto'] - budget[item]['Valor Planejado'];
    }else{
        console.log(`O gasto em ${item} esse mês foi abaixo do esperado.`);
        monthBalance += budget[item]['Valor Planejado'] - budget[item]['Valor Gasto'];
    }
}

console.log(`Saldo final do mês: R$${monthBalance.toFixed(2)}`);

showExercise(6)

let musics = [
    {
        'Artista': 'Matuê',
        'Título': 'Máquina do Tempo',
        'Duração': 230
    },
    {
        'Artista': 'WIU',
        'Título': 'Lágrimas de Crocodilo',
        'Duração': 196
    },
    {
        'Artista': 'O Grilo',
        'Título': 'Serenata Existencialista',
        'Duração': 163
    },
    {
        'Artista': "El De Las R's",
        'Título': 'Militar',
        'Duração': 165
    },
    {
        'Artista': '7 Minutoz',
        'Título': 'Alquimista',
        'Duração': 222
    }
];

let totalDuration = 0;

console.log('Playlist:')

for (let music of musics) {
    console.log(`    ${music['Artista']} - ${music['Título']} (${String(Math.floor(music['Duração'] / 60)).padStart(2, '0')}:${String(music['Duração'] % 60).padStart(2, '0')})`);
}

musics.forEach(music => totalDuration += music['Duração']);

let seconds = totalDuration % 60;

if(totalDuration >= 3600){
    let hours = Math.floor(totalDuration / 3600);
    let minutes = Math.floor((totalDuration % 3600) / 60);
    console.log(`\nDuração total da playlist: ${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`)
}else{
    let minutes = Math.floor(totalDuration / 60);
    console.log(`\nDuração total da playlist: ${minutes}:${String(seconds).padStart(2, '0')}`)
}

showExercise(7);

let students = [
    {'Nome': 'João', 'Nota': 6},
    {'Nome': 'Marcos', 'Nota': 8},
    {'Nome': 'Bruna', 'Nota': 10},
    {'Nome': 'Gustavo', 'Nota': 7},
    {'Nome': 'Leandro', 'Nota': 2},
    {'Nome': 'Marcia', 'Nota': 9}
]
let totalGradeApproved = 0;
let totalGradeRejected = 0;
let totalApproved = 0;
let totalRejected = 0;

for (const std of students) {
    switch(true){
        case std['Nota'] <=4 && std['Nota'] >= 0:
            console.log(`O aluno ${std['Nome']} está reprovado`);
            break;

        case std['Nota'] < 7 && std['Nota'] > 4:
            console.log(`O aluno ${std['Nome']} está de recuperação`);
            break;

        case std['Nota'] <= 10 && std['Nota'] >= 7:
            console.log(`O aluno ${std['Nome']} está aprovado`);
            break;

        default:
            console.log('Valor de nota inválido.');
    };
}

students.forEach(std => {
    switch(true){
        case std['Nota'] <=4 && std['Nota'] >= 0:
            totalGradeRejected += std['Nota'];
            totalRejected++;
            break;

        case std['Nota'] <= 10 && std['Nota'] >= 7:
            totalGradeApproved += std['Nota'];
            totalApproved++;
            break;
    };
});

console.log('\nMédias Gerais:')
console.log(`Aprovados: ${totalApproved === 0 ? totalApproved : (totalGradeApproved / totalApproved)}`);
console.log(`Reprovados: ${totalRejected === 0 ? totalRejected : (totalGradeRejected / totalRejected)}`);

showExercise(8);

let products = [
    {'Nome': 'Sabão em pó', 'Preço': 24.90, 'Quantidade': 36},
    {'Nome': 'Vassoura', 'Preço': 32.10, 'Quantidade': 180},
    {'Nome': 'Sabão Líquido', 'Preço': 12.99, 'Quantidade': 96},
    {'Nome': 'Amaciante', 'Preço': 64.50, 'Quantidade': 53},
    {'Nome': 'Pano de chão', 'Preço': 8.90, 'Quantidade': 238},
    {'Nome': 'Álcool 70%', 'Preço': 14.35, 'Quantidade': 34},
]
let totalStockValue = 0;

console.log('Relatório do estoque:\n')

products.forEach(prod => {
    console.log(`Produto: ${prod.Nome}\nPreço: R$${(prod.Preço).toFixed(2)}\nQuantidade: ${prod.Quantidade}`)
    console.log(`Valor Total do produto: R$${(prod.Preço * prod.Quantidade).toFixed(2)}`)
    console.log('\n' + '-'.repeat(25) + '\n');
    totalStockValue += (prod.Preço * prod.Quantidade);
});

console.log('Valor total do estoque: R$', totalStockValue.toFixed(2))

showExercise(9);

let contacts = [
    {'Nome': 'Fernanda', 'Telefone': '51968598653', 'E-mail': 'fe.silva@gmail.com'},
    {'Nome': 'João', 'Telefone': '51987523485', 'E-mail': 'joao32@hotmail.com'},
    {'Nome': 'Milena', 'Telefone': '51992658635', 'E-mail': 'mimartinez@gmail.com'},
    {'Nome': 'Bruno', 'Telefone': '51989012458', 'E-mail': 'bruno.abreu@outlook.com.br'},
    {'Nome': 'Lurdes', 'Telefone': '51998693656', 'E-mail': 'doneLurdes55@gmail.com.br'},
    {'Nome': 'Kaká', 'Telefone': '51998758485', 'E-mail': 'thebestever@outlook.com.br'},
]
let response9;

console.log('Lista de contatos:\n')

contacts.forEach(cnt => {
    console.log(`${cnt.Nome}\n    Telefone: ${cnt.Telefone}\n    E-mail: ${cnt['E-mail']}\n`)
});

do{

    console.log('Digite o nome do contato que deseja buscar ou "sair" para fechar o programa:')
    response9 = PROMPT('').toUpperCase();

    if(response9 != 'SAIR'){
        let contactFound = false;
        for (const cnt of contacts) {
            if(response9 === cnt.Nome.toUpperCase()){
                console.log(`\nInformações do contato:\nNome: ${cnt.Nome}\nTelefone: ${cnt.Telefone}\nE-mail: ${cnt['E-mail']}\n`)
                contactFound = true;
                break;
            }
        }
        if(!contactFound) console.log('\nNão encontrado.\n');
    }

}while(response9 != 'SAIR')

showExercise(10)

let browserHistory = [];
let top = 0

function browse(page) {
    browserHistory[top] = page;

    top++;

    console.log(`\nVisitou: ${page} | Página atual: ${currentPage()}`);
}

function goBack() {
    if (top === 0) {
        console.log("\nHistórico vazio. Não é possível voltar.");
        return null;
    }

    top--;
    
    let removedPage = browserHistory[top];

    browserHistory.length = top;

    console.log(`\nVoltou de: ${removedPage} | Página atual: ${currentPage()}`);
    return removedPage;
}

function currentPage() {
    if (top === 0) {
        return "Nova Aba (Vazia)";
    }
    
    return browserHistory[top - 1];
}

do{
    console.log('\nO que deseja fazer?\n1.Ir para outra página.\n2.Voltar para página anterior.\n3.Ver página atual\n4.Sair')
    response = intInput('', true, (response) => response > 4)

    switch(response){
        case 1:
            let page = stringInput('\nDigite o nome da página que deseja acessar:', null, false);
            browse(page);
            break;

        case 2:
            goBack();
            break;

        case 3:
            console.log(`\nPágina atual: ${currentPage()}`);
            break;
    }
}while(response !== 4)

showExercise(11);

let patientList = [];
let response11;

function addPatient(patient){
    patientList[patientList.length] = patient;

    console.log(`\nPaciente ${patient} entrou na fila de espera.`)
    displayPatients()
}

function assistPatient(){
    if(patientList.length === 0){
        console.log('\nNão existem pacientes na fila de espera');
        return;
    }

    let nextPatient = patientList[0]
    
    for(let i = 1; i < patientList.length; i++){
        patientList[i - 1] = patientList[i];
    }

    patientList.length = patientList.length - 1;

    console.log(`\nPaciente ${nextPatient} foi atendido`)

    displayPatients()
}

function displayPatients(){
    if(patientList.length === 0){
        console.log('\nA lista de espera está vazia')
        return;
    }
    console.log('\nLista atualizada:')
    for(let i = 0; i < patientList.length; i++){
        if(i === 0){
            console.log(`Próximo paciente: ${patientList[i]}`)
            continue;
        }
        console.log(`Paciente ${(i + 1)}: ${patientList[i]}`)
    }
}

displayPatients()

do{

    console.log('\nO que deseja fazer?\n1.Adicionar novo paciente a lista de espera.\n2.Atender paciente.\n3.Ver lista de espera\n4.Sair')
    response11 = intInput('', true, (response) => response > 4)

    switch(response11){
        case 1:
            let patient = stringInput('\nDigite o nome do paciente:', (response) => response.length < 3, false);
            addPatient(patient);
            break;

        case 2:
            assistPatient();
            break;

        case 3:
            displayPatients();
            break;
    }

}while(response11 !== 4)

showExercise(12);

let head = null;
let response12;

function add(task) {
    let newNo = {
        value: task,
        next: null
    };

    if (head === null) {
        head = newNo;
        console.log(`\nNova tarefa (${task}) adicionada com sucesso!!!`)
        return;
    }

    let current = head;
    
    while (current.next !== null) {
        current = current.next;
    }

    current.next = newNo;

    console.log(`\nNova tarefa (${task}) adicionada com sucesso!!!`)
}

function remove(task) {
    if (head === null) {
        console.log('Não existem tarefas na lista.')
        return;
    }

    if (head.value === task) {
        head = head.next;
        console.log(`\nTarefa (${task}) removida com sucesso!!!`)
        return;
    }

    let current = head;
    let anterior = null;

    while (current !== null) {
        if (current.value === task) {
            anterior.next = current.next;
            console.log(`\nTarefa (${task}) removida com sucesso!!!`)
            return;
        }
        
        anterior = current;
        current = current.next;
    }
}

function displayTasks() {
    let current = head;

    if (head === null) {
        console.log('Não existem tarefas na lista.')
        return;
    }
    
    console.log('\nLista de tarefas:')

    let counter = 1;
    while (current !== null) {
        console.log(`Tarefa nº ${counter}: ${current.value}`)
        current = current.next;
        counter++;
    }
}

do{
    console.log('\nO que deseja fazer?\n1.Adicionar nova tarefa.\n2.Remover tarefa.\n3.Ver lista de tarefas\n4.Sair')
    response12 = intInput('', true, (response) => response > 4)

    let task

    switch(response12){
        case 1:
            task = stringInput('\nDigite o nome da tarefa:', null, false);
            add(task);
            break;

        case 2:
            if (head === null) {
                console.log('Não existem tarefas na lista.')
                break;
            }

            task = stringInput(
                '\nDigite o nome da tarefa que deseja remover:',
                (response) =>{
                    let current = head;
                    while (current !== null) {
                        if(current.value.toUpperCase() === response.toUpperCase()) return false;
                        current = current.next;
                    }
                    return true;
                },
                false
            );
            remove(task);
            break;

        case 3:
            displayTasks();
            break;
    }
}while(response12 !== 4)