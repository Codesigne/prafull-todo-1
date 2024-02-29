import { useState } from "react";

const initialState = { search: '' }

function AddTodo(params) {
    const [search, setSearch] = useState(initialState)

    function handleSubmit(event) {
        event.preventDefault()
    }
    function handleAdd(event) {
        // console.log(event.target.value);
        setSearch(event.target.value)
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
export { initialState }