import { createContext, useContext, useReducer } from "react";
// import useAutherization from "../services/authourization";
import {
    Actions,
    // ---------------
    filterReducer,
    filterStore,
    // ---------------
    todoListReducer,
    todoListStore,
    // ---------------
    addTodoReducer,
    addTodoStore,
    // ---------------
    userReducer,
    userStore,
    // ---------------
    // appReducer

} from "../store"

// console.log("todoListStore :", todoListStore);

const CONTEXT_1 = createContext()

function Context_1_provider({ children }) {

    const [filterState, filterDispatch] = useReducer(filterReducer, filterStore)
    const [todoListState, todoListDispatch] = useReducer(todoListReducer, todoListStore)
    const [addTodoState, addTodoDispatch] = useReducer(addTodoReducer, addTodoStore)
    const [userState, userDispatch] = useReducer(userReducer, userStore)


    // const haspermision = useAutherization()
    // Combined state object
    // const combinedState = {
    //     filterReducer: filterState,
    //     todoListReducer: todoListState,
    //     addTodoReducer: addTodoState,
    // };
    const combinedState = {
        filterState,
        todoListState,
        addTodoState,
        userState,
    };

    // Combined dispatch function
    // const combinedDispatch = action => {
    //     // Dispatch action to each reducer
    //     filterDispatch(action);
    //     todoListDispatch(action);
    //     addTodoDispatch(action);
    //     // Dispatch action to other reducers as needed
    // };
    const combinedDispatch = {
        // Dispatch action to each reducer
        filterDispatch,
        todoListDispatch,
        addTodoDispatch,
        userDispatch,
        // Dispatch action to other reducers as needed
    };
    // let appStore = combinedState

    // const [appState, appDispatch] = useReducer(appReducer, appStore)

    // console.log("appState, appDispatch :", appDispatch);


    // const { hasPermission } = useAutherization('user')

    return (
        <>
            {/* <CONTEXT_1.Provider value={{
                Actions,
                // -------------
                filterState, filterDispatch,
                // -------------
                todoListState, todoListDispatch,
                // -------------
                addTodoState, addTodoDispatch,
                // -------------
            }} > */}
            <CONTEXT_1.Provider
                value={{
                    state: combinedState,
                    dispatch: combinedDispatch,
                    Actions,
                    // hasPermission
                }}
            >
                {children}
            </CONTEXT_1.Provider>
        </>
    )
}
function useContext_1(params) {
    const context = useContext(CONTEXT_1)
    // console.log("context :", context);
    if (!context) {
        throw new Error('useContext_1 must be within Context_1_Provider')
    }
    return context
}
export { Context_1_provider as CONTEXT_1_PROVIDER, useContext_1 as USECONTEXT_1 }