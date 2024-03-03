import './App.css';
import { CONTEXT_1_PROVIDER } from "./contexts/index.js"
import Todo from './views/page/Todo';
function App() {
  return (
    <div className="App">
      <main>
        <CONTEXT_1_PROVIDER>
          <Todo />
        </CONTEXT_1_PROVIDER>
      </main>
    </div>
  );
}

export default App;
