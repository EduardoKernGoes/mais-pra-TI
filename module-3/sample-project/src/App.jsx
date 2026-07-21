import { useState } from 'react'

function Saudacao({nome}){
  return <h2>Olá {nome}, seja bem-vindo(a)!!</h2>
}

export default function App() {

  const [tarefas, setTarefas] = useState([
    { id: 1, nome: 'Estudar React', concluida: false },
    { id: 2, nome: 'Fazer exercícios', concluida: true },
    { id: 3, nome: 'Ler documentação', concluida: false },
  ]);

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <ul>
        {tarefas.map((tarefa) => (
          <li>
            <p id={tarefa.id} style={{ width: '100px', color: tarefa.concluida ? 'green' : 'red' }}>
              {tarefa.nome}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )

}