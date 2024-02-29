// import logo from './logo.svg';
import './App.css';
import AddTodo from './views/components/AddTodo';
import TodoList from './views/components/TodoList';
import Filter from './views/components/filter';


function App() {
  return (
    <div className="App">
      <main>
        <div className="container">
          <Filter></Filter>
          <hr />
          <TodoList> </TodoList>
          <hr />
          <AddTodo></AddTodo>
        </div>
      </main>
    </div>
  );
}

export default App;
