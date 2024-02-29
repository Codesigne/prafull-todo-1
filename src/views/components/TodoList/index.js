import { useState } from "react"
import TodoListItem from "../TodoListItem"

const initialState = {
    todo: [
        {
            id: 1,
            text: 'Sample Task 1',
            isCompleted: true

        }, {
            id: 2,
            text: 'Sample Task 2',
            isCompleted: false

        }, {
            id: 3,
            text: 'Sample Task 3',
            isCompleted: true

        },
        {
            id: 4,
            text: 'Sample Task 4',
            isCompleted: false

        }, {
            id: 5,
            text: 'Sample Task 5',
            isCompleted: true

        }, {
            id: 6,
            text: 'Sample Task 6',
            isCompleted: false

        },
    ]
}

function TodoList(props) {

    const [stateTodoList, setStateTodoList] = useState(initialState)

    function handleIsCompleted(event) {
        console.log(event);
        console.log(event.target.checked);
        // setStateTodoList(() => {
        //     stateTodoList.map((item) => {
        //         if (item.id === event.target.value) {
        //             return { ...item, isCompleted: event.target.checked }

        //         } else {
        //             return item
        //         }
        //     })
        // })
        const updatedList = [...stateTodoList.todo]
        console.log("updatedList :", updatedList);

        const itemToUpdate = updatedList.find(item => {
            console.log("item.id :", item.id);
            console.log("event.target.value :", event.target.value);
            return item.id === +event.target.value
        })

        console.log("itemToUpdate :", itemToUpdate);

        itemToUpdate.isCompleted = !itemToUpdate.isCompleted
        setStateTodoList({ ...stateTodoList, todo: updatedList })

    }

    let list = stateTodoList.todo.map((listItem) => {
        return <TodoListItem key={listItem.id} handleIsCompleted={handleIsCompleted} {...listItem} />
    })
    return (
        <ul className="list-group">
            {list}
        </ul>
    )
}

export default TodoList
export { initialState }