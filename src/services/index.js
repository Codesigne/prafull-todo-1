const TodoAPI = {
    set: (todoState) => {
        localStorage.setItem('todo', JSON.stringify(todoState.todo))
    },
    get: (todoState) => {
        // await null
        let todo = []
        const stringTodo = localStorage.getItem('todo')
        try {
            todo = JSON.parse(stringTodo)
        } catch (error) {
            throw new Error(error)
        }
        return Array.isArray(todo) ? todo : []
    },
}
export default TodoAPI
