import filterState from "../views/components/filter/state";
import filterReducer from "../views/components/filter/reducer";
// --------------------------------------------------------------
import addTodoState from "../views/components/AddTodo/state";
import addTodoReducer from "../views/components/AddTodo/reducer";
// --------------------------------------------------------------
// import initialTodoListState from "../views/components/TodoList/state";
import todoListReducer from "../views/components/TodoList/reducer";
// --------------------------------------------------------------
import userState from "../services/user/user.state.js";
import userReducer from "../services/user/user.reducer.js";
// --------------------------------------------------------------

import TodoAPI from "../services";

const Actions = {
    MARK_ITEM: "MARK:ITEM",
    INCLUDE_COMPLETED: "INCLUDE:COMPLETED",
    SEARCH: "SEARCH",
    SET_DESCRIPTION: "SET_DESCRIPTION",
    ADD_TASK: "ADD_TASK",
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT",
    SET_USER_LOGIN: "SET_USER_LOGIN"
}

/**
 * ==============================================================
 * Master state can be added here and modificaton
 * --------------------------------------------------------------
 *  // const
    //     {
    //         component1State, // to export
    //         component2State // to export
    //     } = {
    //         component1State:{[{},{}]},
    //         component2State:{[{},{}]}
    //     }
 * ##############################################################
 */

let localTodo = TodoAPI.get() || []

// console.log("localTodo :", localTodo);
const
    {
        todoListState, // to export
        // component2State // to export
        // user,
    } = {
        // todoListState: { todo: [...initialTodoListState.todo, ...localTodo] },
        todoListState: { todo: [...localTodo] },
        // component2State: { [{}, {}]}
        // user:{
        //     name:'',
        //     email:'',
        // }
    }
/**
 * ==============================================================
 * Master Reducers can be added here
 * -------------------------------------------------------------
 * 
 * { // function component1Reducer(state, action) { // to export
    //     switch (action.type) {
    //         case Actions.INCLUDE_COMPLETED:
    //             console.log("state :", state);
    //             console.log("action :", action);
    //             return { ...state, includCompleted: action.payload }
    //         // break;

    //         case Actions.SEARCH:
    //             console.log("state :", state);
    //             console.log("action :", action);
    //             return { ...state, search: action.payload }
    //         // break;

    //         default:
    //             throw Error(`Unknown action type ${action.type}`)
    //         // break;
    //     }
    // }

    // function component2Reducer(state, action) { // to export
    //     switch (action.type) {
    //         case Actions.MARK_ITEM:

    //             console.log("state :", state);
    //             console.log("action :", action);
    //             const updatedList = { todo: [...state.todo] }
    //             console.log("updatedList :", updatedList);
    //             // return [...state, todo: [action.payload]]
    //             return updatedList
    //         // break;

    //         default:
    //             throw Error(`Unknown action type ${action.type}`)
    //         // break;
    //     }
    // }
 * ##############################################################
 */
function appReducer(state, action) {
    switch (action.type) {
        case Actions.ADD_TASK:
            console.log(`Triggered : ${Actions.ADD_TASK}`);
            // return [...state, {
            //     id: 1,
            //     text: action.payload,
            //     isCompleted: false
            // }]
            break;
        case Actions.LOGIN:
            console.log(`Triggered : ${Actions.LOGIN}`);
            // return [...state, {
            //     id: 1,
            //     text: action.payload,
            //     isCompleted: false
            // }]
            break;
        case Actions.LOGOUT:
            console.log(`Triggered : ${Actions.LOGOUT}`);
            // return [...state, {
            //     id: 1,
            //     text: action.payload,
            //     isCompleted: false
            // }]
            break;

        default:
            throw Error(`Unknown action type ${action.type}`)
        // break;
    }
    // break;
}

export {
    Actions,
    // ------
    filterReducer, filterState as filterStore,
    // -------
    todoListReducer, todoListState as todoListStore,
    // -------
    addTodoReducer, addTodoState as addTodoStore,
    // -------
    userReducer, userState as userStore,
    // -------
    appReducer,
    // -------

}