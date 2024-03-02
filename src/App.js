// import logo from './logo.svg';
import './App.css';
import AddTodo from './views/components/AddTodo';
import TodoList from './views/components/TodoList';
import Filter from './views/components/filter';

// import { auth } from "../src/Firebase"
// import { GoogleAuthProvider } from "firebase/auth"
// import { signInWithPopup } from "firebase/auth"

// import { getAuth } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
// import { GoogleAuthProvider } from "firebase/auth";


import { CONTEXT_1_PROVIDER } from "./contexts/index.js"
// import firebase_app, { auth } from './firebase/Firebase';
import { auth } from './firebase/Firebase';
// import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import provider from "./firebase/auth_google_provider_create"
// import signInWithPopup from "./firebase/auth_google_signin_popup"




function App() {
  // const auth = getAuth();
  async function handleLogin(params) {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.info("result :", result);
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        console.info("user info :", user);
        // ...
      }).catch((error) => {
        // // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.customData.email;
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // // ...
      });
  }

  return (
    <div className="App">

      <button onClick={handleLogin} >login</button>
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
