import { useState } from "react"


function List({todo}) {

    return (
        <div><h1>Lista de Tarefas</h1>

            <div className="todo-list">
                {todo.map((todo) => (
                    <div className="todo">
                        <div className="content">
                            <p>{todo.text}</p>
                            <p className="category">({todo.category})</p>
                        </div>
                        <div>
                            <button className="complete">Completar</button>
                            <button className="remove">X</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default List