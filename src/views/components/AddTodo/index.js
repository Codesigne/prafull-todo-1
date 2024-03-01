// import { useState } from "react";
// const initialState = { search: '' }

import { USECONTEXT_1 } from "../../../contexts"


function AddTodo(params) {
    // const [, setSearch] = useState(initialState)

    // function handleSubmit(event) {
    //     event.preventDefault()
    // }
    // function handleAdd(event) {
    //     // console.log(event.target.value);
    //     setSearch(event.target.value)
    // }

    const { Actions, state, dispatch } = USECONTEXT_1()
    function handleSubmit(event) {
        event.preventDefault()
        dispatch.todoListDispatch({
            type: Actions.ADD_TASK,
            payload: state.addTodoState.taskDescription ?? 'Empty'
            // payload: todoListState
        })
    }
    function handleAdd(event) {
        console.log(`event on ${Actions.SET_DESCRIPTION}:`, event);
        console.log(state);
        dispatch.addTodoDispatch({
            type: Actions.SET_DESCRIPTION,
            payload: event.target.value
        })
    }
    return (
        <>
            <div className="card" >
                <div className="card-body">
                    <div className="input-group mb-3">
                        <input type="text"
                            className="form-control"
                            placeholder="Add task description"
                            aria-label="Add task description"
                            aria-describedby="button-addon2"

                            onChange={handleAdd}
                        />
                        <button className="btn btn-primary" onClick={handleSubmit} type="button" > Add  </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddTodo
// export { initialState }