import TodoListItem from "../TodoListItem"

const initialState = {
    todo: [
        {
            id: 1,
            text: 'asdadasdasda'

        }, {
            id: 2,
            text: 'asdadaswsssdasda'

        }, {
            id: 3,
            text: 'afghfhsdadasdasda'

        },
    ]
}
function TodoList(props) {
    let list = initialState.todo.map((listItem) => {
        return <TodoListItem key={listItem.id} {...listItem} />
    })
    return (
        <ul className="list-group">
            {list}
        </ul>
    )
}

export default TodoList
export { initialState }