// import { useState } from "react"
import TodoListItem from "../TodoListItem"
import { USECONTEXT_1 } from "../../../contexts"
import { useEffect } from "react"
import TodoAPI from "../../../services"

function TodoList(props) {

    // const [stateTodoList, setStateTodoList] = useState(initialState)
    // const { Actions, todoListReducer, todoListStore } = USECONTEXT_1()
    // const { Actions, state, dispatch, state } = USECONTEXT_1()
    const { Actions, state, dispatch } = USECONTEXT_1()

    // console.log("state :", state);
    useEffect(() => {
        TodoAPI.set(state.todoListState)
    }, [state.todoListState])
    function handleIsCompleted(event) {
        // // console.log(event);
        // console.log(event.target.checked);
        const updatedList = [...state.todoListState.todo]
        // console.log("updatedList :", updatedList);
        const itemToUpdate = updatedList.find(item => {
            // console.log("item.id :", item.id);
            // console.log("event.target.value :", event.target.value);
            return item.id === +event.target.value
        })
        // console.log("itemToUpdate :", itemToUpdate);
        itemToUpdate.isCompleted = !itemToUpdate.isCompleted
        // todoListReducer({ ...state, todo: updatedList })
        dispatch.todoListDispatch({
            type: Actions.MARK_ITEM,
            payload: updatedList
        })
    }

    // let list = 

    //     state.todo.map((listItem) => {
    //     // return state.includCompleted ? 
    //     //     <TodoListItem key={listItem.id} handleIsCompleted={handleIsCompleted} {...listItem} />
    //     //     : ()=>
    //     let searchTerm = state.search

    //     console.log("listItem.text.toLowerCase() :", listItem.text.toLowerCase());
    //     console.log("searchTerm :", searchTerm);
    //     if (!!state.includCompleted) {
    //         console.log("&& listItem.search.match(/d/):", listItem.text.toLowerCase());
    //         if (listItem.text.toLowerCase().includes(searchTerm)) {
    //             return <TodoListItem key={listItem.id} handleIsCompleted={handleIsCompleted} {...listItem} />
    //         }
    //     } else {
    //         if (!listItem.isCompleted) {
    //             if (listItem.text.toLowerCase().includes(searchTerm)) {
    //                 return <TodoListItem key={listItem.id} handleIsCompleted={handleIsCompleted} {...listItem} />
    //             }
    //         }
    //     }

    // })
    // let searchTerm = state.search
    let list =
        state.todoListState.todo
            .filter((listItem) => {
                return (() => {
                    if (!!state.filterState.includCompleted) {
                        return listItem
                    } else {
                        if (!listItem.isCompleted) {
                            return listItem
                        }
                    }
                })()
            })
            .filter((listItem) => {
                return (() => {
                    if (listItem.text.toLowerCase().includes(state.filterState.search)) {
                        return listItem
                    } else {
                        // if (!listItem.isCompleted) {
                        //     return listItem
                        // }
                    }
                })()
            })
            .map((listItem) => {
                return <TodoListItem key={listItem.id} handleIsCompleted={handleIsCompleted} {...listItem} />
            })

    return (
        <ul className="list-group">
            {list}
        </ul>
    )
}

export default TodoList
