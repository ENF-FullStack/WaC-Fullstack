
const Todo = props => (
    <tr>
        <td>{props.todo.name}</td>
        <td>{props.todo.account}</td>
        <td>{props.todo.league}</td>
        <td>{props.todo.level}</td>
        <td>{props.todo.class}</td>
        <td>{props.todo.ascendancy}</td>
        <td>
            <EditRoundedIcon onClick={(ev) => props.editCharacter(props.todo._id,ev)} style={{ color: green[500] }} />
        </td>
        <td>
            <DeleteRoundedIcon onClick={(ev) => props.delCharacter(props.todo._id,ev)} style={{ color: red[500] }} />
        </td>
    </tr>
)

todoList() {
    return this.state.todos.map(function(currentTodo, i){
        return <Todo todo={currentTodo} editCharacter={(id,ev) => this.editCharacter(id,ev)} delCharacter={(id,ev) => this.delCharacter(id,ev)} key={i} />;
    })
}


<table className="table table-striped" style={{ marginTop: 20 }} >
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Account</th>
                                <th>League</th>
                                <th>Level</th>
                                <th>Class</th>
                                <th>Ascendancy</th>
                                <th>Edit</th>
                                <th>Del</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.todoList() }
                        </tbody>
                    </table>