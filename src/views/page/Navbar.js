import { Outlet, Link } from "react-router-dom";
// -----------------------------------------------------
import { signInWithPopup } from "firebase/auth";
import { auth } from '../../firebase/Firebase';
import provider from "../../firebase/auth_google_provider_create"
import { USECONTEXT_1 } from "../../contexts";
import { useEffect } from "react";


const Navbar = () => {
    const { Actions, state, dispatch } = USECONTEXT_1()

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

                dispatch.userDispatch({
                    type: Actions.SET_USER_LOGIN,
                    payload: user
                })

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


    useEffect(
        () => {

            console.log("after user set 1:", state.userState.isAuthorised());
            // console.log("after user set 2:");
            // console.log("after user set 2 = :", state.userState.isAuthorised2());

        }, [state.userState]
    )

    return (
        <>
            <nav>
                <ul>
                    {/* <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Login">Login</Link>
                    </li>
                    <li>
                        <Link to="/Todo">Todo</Link>
                    </li> */}
                    <li>
                        <button className='btn btn-primary' onClick={handleLogin} >Login with Gogle</button>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Navbar;