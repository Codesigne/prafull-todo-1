
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Filter from '../components/filter';

const Todo = () => {
    return (
        <div className="container">
            <Filter></Filter>
            <hr />
            <TodoList> </TodoList>
            <hr />
            <AddTodo></AddTodo>
        </div>
    );
};

export default Todo;


