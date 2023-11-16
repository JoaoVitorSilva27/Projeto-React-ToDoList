function Form() {
    return (
        <div className="todoform">
            <h1>Criar tarefa</h1>
            <form>
                <input type="text" placeholder="Digite o titulo da tarefa" />
                <select>
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Estudos">Estudo</option>
                    <option value="pessoal">Pessoal</option>
                </select>

            <button type="submit">Criar</button>
            </form>
        </div>
    )
}

export default Form