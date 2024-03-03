// import logo from './logo.svg';
import './App.css';

// import { auth } from "../src/Firebase"
// import { GoogleAuthProvider } from "firebase/auth"
// import { signInWithPopup } from "firebase/auth"

// import { getAuth } from "firebase/auth";
// import { signInWithPopup } from "firebase/auth";
// import { GoogleAuthProvider } from "firebase/auth";


import { CONTEXT_1_PROVIDER } from "./contexts/index.js"
// import firebase_app, { auth } from './firebase/Firebase';
// import { auth } from './firebase/Firebase';
// import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import provider from "./firebase/auth_google_provider_create"
import LoginPage from './views/page/login/loginPage';
// import signInWithPopup from "./firebase/auth_google_signin_popup"


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './views/page/Navbar';
import Home from './views/page/Home';
import NoPage from './views/page/NoPage';
import Todo from './views/page/Todo';

function App() {
  // const auth = getAuth();

  return (
    <div className="App">
      <main>
        <CONTEXT_1_PROVIDER>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navbar />}>
                <Route index element={<Home />} />
                <Route path="Login" element={<LoginPage />} />
                <Route path="Todo" element={<Todo />} />
                {/* <Route path="contact" element={<Contact />} /> */}
                <Route path="*" element={<NoPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </CONTEXT_1_PROVIDER>
      </main>
    </div>
  );
}

export default App;
