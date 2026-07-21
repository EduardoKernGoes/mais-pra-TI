const btnToggle = document.querySelector('#isEnterprise');
const containerExtras = document.querySelector('#camposExtras');
const companyName = document.querySelector('#companyName');

btnToggle.addEventListener('change', function() {
    if (this.checked) {
        containerExtras.classList.remove('d-none');
        companyName.required = true

    } else {
        containerExtras.classList.add('d-none');
        companyName.required = false
    }
});

const selectPositions = document.querySelector('#selectPositions')
const jobPosition = document.querySelector('#jobPosition')
const jobPositionDiv = document.querySelector('#jobPoistionDiv')

selectPositions.addEventListener('change', (event) => {
    if(event.target.value === 'other'){
        selectPositions.classList.add('flex-grow-0')
        selectPositions.classList.add('w-auto')
        jobPosition.classList.remove('d-none')
        jobPositionDiv.classList.add('input-group')

    }else if(!jobPosition.classList.contains('d-none')) {
        selectPositions.classList.remove('flex-grow-0')
        selectPositions.classList.remove('w-auto')
        jobPositionDiv.classList.remove('input-group');
        jobPosition.classList.add('d-none');
    }
})

const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    alert('Mensagem enviada com sucesso!\nObrigado pela confiança, em breve entrarei em contato.')
    window.location.href = '/module-2/exercise-lists/index.html'
})