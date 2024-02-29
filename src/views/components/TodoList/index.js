import { useState } from "react"
import TodoListItem from "../TodoListItem"
import { useContext_1 } from "../../../contexts"

function TodoList(props) {

    // const [stateTodoList, setStateTodoList] = useState(initialState)
    // const { Actions, todoListReducer, todoListStore } = useContext_1()
    const { Actions, todoListState, todoListDispatch } = useContext_1()

    // console.log("todoListState :", todoListState);

    function handleIsCompleted(event) {
        // // console.log(event);
        // console.log(event.target.checked);
        const updatedList = [...todoListState.todo]
        // console.log("updatedList :", updatedList);
        const itemToUpdate = updatedList.find(item => {
            // console.log("item.id :", item.id);
            // console.log("event.target.value :", event.target.value);
            return item.id === +event.target.value
        })
        // console.log("itemToUpdate :", itemToUpdate);
        itemToUpdate.isCompleted = !itemToUpdate.isCompleted
        // todoListReducer({ ...todoListState, todo: updatedList })
        todoListDispatch({
            type: Actions.MARK_ITEM,
            payload: updatedList
        })
    }

    let list = todoListState.todo.map((listItem) => {
        return <TodoListItem key={listItem.id} handleIsCompleted={handleIsCompleted} {...listItem} />
    })

    return (
        <ul className="list-group">
            {list}
        </ul>
    )
}

export default TodoList
