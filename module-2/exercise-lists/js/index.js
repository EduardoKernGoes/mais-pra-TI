const githubUser = 'EduardoKernGoes'; 
const url = `https://api.github.com/users/${githubUser}/repos`;

async function renderizarDadosGithub() {
    try {
        const response = await fetch(url);
        const repositorios = await response.json();

        console.log(repositorios)

        const totalProjetos = repositorios.length;
        document.getElementById('total-projetos').innerText = totalProjetos;

        const contagemLinguagens = {};

        repositorios.forEach(repo => {
            const linguagem = repo.language;
            if (linguagem) { 
                if (contagemLinguagens[linguagem]) {
                    contagemLinguagens[linguagem]++;
                } else {
                    contagemLinguagens[linguagem] = 1;
                }
            }
        });

        const labels = Object.keys(contagemLinguagens);
        const dados = Object.values(contagemLinguagens);

        const ctx = document.getElementById('githubChart').getContext('2d');

        console.log(contagemLinguagens)
        
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    data: dados,
                    backgroundColor: [
                        '#3F41D9',
                        '#D4F58B',
                        '#ef6f3e',
                        '#307ef2',
                        '#212529',
                        '#ffc107'
                    ],
                    borderWidth: 2,
                    borderColor: '#ffffff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            font: { family: 'sans-serif' }
                        }
                    }
                }
            }
        });

        const list_projects = document.querySelector('#list-projects')

        for(let i = 0; i < repositorios.length; i++){
            let project = document.createElement('div')
            let title = document.createElement('h3')
            
            title.textContent = 'Teste'

            list_projects.appendChild(project)
        }

    } catch (error) {
        console.error('Erro ao carregar dados do GitHub:', error);
        document.getElementById('total-projetos').innerText = "Erro ao carregar";
    }
}

renderizarDadosGithub();