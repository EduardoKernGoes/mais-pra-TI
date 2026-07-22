import { useState } from 'react'

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      texto: "Ir para academia",
      categoria: 'Exercicios',
      completa: false
    },
    {
      id: 2,
      texto: "Fazer tarefa do +PraTI",
      categoria: 'Estudos',
      completa: false
    },
    {
      id: 3,
      texto: "Limpar a Casa",
      categoria: 'Diária',
      completa: true
    }
  ])

  const concluirTarefa = (id) => {
    setTodos(todos.map((todo) => 
      todo.id === id ? {...todo, completa: !todo.completa} : todo
    ))
  }

  return<div className="app">
    <h1>Lista de tarefas</h1>
    <div className="todo-list">
      {todos.map((todo) => (
        <div className='todo' key={todo.id}>
          <div className='conteudo'>
            <input type='checkbox' checked={todo.completa} onChange={() => concluirTarefa(todo.id)}/>
            <p>{todo.texto}</p>
            <p>{todo.categoria}</p>
          </div>
        </div>
      ))}
    </div>
  </div>

}

export default App