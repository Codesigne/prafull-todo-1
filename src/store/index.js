import filterState from "../views/components/filter/state";
import filterReducer from "../views/components/filter/reducer";
// --------------------------------------------------------------
import todoListState from "../views/components/TodoList/state";
import todoListReducer from "../views/components/TodoList/reducer";
// --------------------------------------------------------------


const Actions = {
    MARK_ITEM: "MARK:ITEM",
    INCLUDE_COMPLETED: "INCLUDE:COMPLETED",
    SEARCH: "SEARCH"
}

/**
 * ==============================================================
 * Master state can be added here
 * ##############################################################
 */

// const
//     {
//         component1State, // to export
//         component2State // to export
//     } = {
//         component1State:{[{},{}]},
//         component2State:{[{},{}]}
//     }


/**
 * ==============================================================
 * Master Reducers can be added here
 * ##############################################################
 */

// function component1Reducer(state, action) { // to export
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

export {
    Actions,
    // ------
    filterReducer,
    filterState as filterStore,
    // -------
    todoListReducer,
    todoListState as todoListStore,
}