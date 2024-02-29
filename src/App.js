// import logo from './logo.svg';
import './App.css';
import TodoList from './views/components/TodoList';


function App() {
  return (
    <div className="App">
      <main>
        <div className="container">
          <TodoList></TodoList>
        </div>
      </main>
    </div>
  );
}

export default App;
