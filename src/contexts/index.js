import { createContext, useContext, useReducer } from "react";
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
    // appReducer

} from "../store"

// console.log("todoListStore :", todoListStore);

const CONTEXT_1 = createContext()

function Context_1_provider({ children }) {

    const [filterState, filterDispatch] = useReducer(filterReducer, filterStore)
    const [todoListState, todoListDispatch] = useReducer(todoListReducer, todoListStore)
    const [addTodoState, addTodoDispatch] = useReducer(addTodoReducer, addTodoStore)

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
        // Dispatch action to other reducers as needed
    };

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
                    Actions
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