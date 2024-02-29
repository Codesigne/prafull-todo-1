import { createContext, useContext, useReducer } from "react";
import { Actions, filterReducer, filterStore, todoListReducer, todoListStore } from "../store"

// console.log("todoListStore :", todoListStore);

const Context_1 = createContext()

function Context_1_provider({ children }) {
    const [filterState, filterDispatch] = useReducer(filterReducer, filterStore)
    const [todoListState, todoListDispatch] = useReducer(todoListReducer, todoListStore)
    return (
        <>
            <Context_1.Provider value={{ Actions, filterState, filterDispatch, todoListState, todoListDispatch }} >
                {children}
            </Context_1.Provider>
        </>
    )
}
function useContext_1(params) {
    const context = useContext(Context_1)
    // console.log("context :", context);
    if (!context) {
        throw new Error('useContext_1 must be within Context_1_Provider')
    }
    return context
}
export { Context_1_provider, useContext_1 }