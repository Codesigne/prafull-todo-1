function TodoListItem(props) {
    return (
        <>
            <li className="list-group-item" >
                {/* <b>     {props.text}</b> */}
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" onChange={props.handleIsCompleted} value={props.id} checked={props.isCompleted} />
                    <label className={props.isCompleted ? "form-check-label text-decoration-line-through" : "form-check-label"} htmlFor="flexCheckDefault">
                        {props.text}
                    </label>
                </div>
            </li>
        </>
    )
}

export default TodoListItem