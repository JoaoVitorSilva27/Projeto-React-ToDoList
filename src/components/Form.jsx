import { useState } from "react"

function Form({ addTodo }) {
    const [value, setValue] = useState('')
    const [category, setCategory] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        if (!value || !category) {
            return
        }
        addTodo(value, category)
        setValue('')
        setCategory('')
    }

    return (
        <div className="todoform">
            <h1>Criar tarefa</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Digite o titulo da tarefa" value={value} onChange={(e) => setValue(e.target.value)}/>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Estudos">Estudos</option>
                    <option value="Pessoal">Pessoal</option>
                </select>

            <button type="submit">Criar</button>
            </form>
        </div>
    )
}

export default Form