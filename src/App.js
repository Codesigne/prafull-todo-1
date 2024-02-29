// import logo from './logo.svg';
import './App.css';
import AddTodo from './views/components/AddTodo';
import TodoList from './views/components/TodoList';
import Filter from './views/components/filter';

import { CONTEXT_1_PROVIDER } from "./contexts/index.js"

function App() {
  return (
    <div className="App">
      <main>
        <CONTEXT_1_PROVIDER>
          <div className="container">
            <Filter></Filter>
            <hr />
            <TodoList> </TodoList>
            <hr />
            <AddTodo></AddTodo>
          </div>
        </CONTEXT_1_PROVIDER>
      </main>
    </div>
  );
}

export default App;
