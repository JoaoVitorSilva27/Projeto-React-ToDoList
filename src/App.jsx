import List from './components/List.jsx'
import Form from './components/Form.jsx'
import { useState } from 'react'
import './styles/bg.scss'
import './styles/App.scss'

function App() {
  const [todo, setTodo] = useState([
    {
        id: 1,
        text: "criar funcionalidade x no sistema",
        category: "Trabalho",
        isCompleted: false,
    },
    {
        id: 2,
        text: "Ir pra academia",
        category: "Pessoal",
        isCompleted: false,
    },
    {
        id: 3,
        text: "Estudar React",
        category: "Estudos",
        isCompleted: false,
    }
])

const addTodo = (text, category) =>{

  const newTodos = [...todo,{
    id: Math.floor(Math.random() * 10000),
    text,
    category,
    isCompleted: false
  }]

  setTodo(newTodos)
}

  return (
    <div className='app'>
      <List todo={todo}/>
      <Form addTodo={addTodo}/>
    </div>
  )
}

export default App
