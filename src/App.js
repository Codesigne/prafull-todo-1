// import logo from './logo.svg';
import './App.css';
import AddTodo from './views/components/AddTodo';
import TodoList from './views/components/TodoList';
import Filter from './views/components/filter';

import { Context_1_provider } from "./contexts/index.js"

function App() {
  return (
    <div className="App">
      <main>
        <Context_1_provider>
          <div className="container">
            <Filter></Filter>
            <hr />
            <TodoList> </TodoList>
            <hr />
            <AddTodo></AddTodo>
          </div>
        </Context_1_provider>
      </main>
    </div>
  );
}

export default App;
