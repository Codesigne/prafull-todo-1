function TodoListItem(props) {
    return (
        <>
            <li className="list-group-item" >
                {/* <b>     {props.text}</b> */}
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value={props.id} />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        {props.text}
                    </label>
                </div>
            </li>
        </>
    )
}

export default TodoListItem