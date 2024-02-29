

import todoListState from "../views/components/TodoList/state"
import filterState from "../views/components/filter/state"
const Actions = {
    MARK_ITEM: "MARK:ITEM",
    INCLUDE_COMPLETED: "INCLUDE:COMPLETED",
    SEARCH: "SEARCH"
}

// const
//     {
//         filterState,
//         todoListState
//     } = {
//         filterState,
//         todoListState
//     }

function filterReducer(state, action) {
    switch (action.type) {
        case Actions.INCLUDE_COMPLETED:
            console.log("state :", state);
            console.log("action :", action);
            return { ...state, includCompleted: action.payload }
        // break;

        case Actions.SEARCH:
            console.log("state :", state);
            console.log("action :", action);
            return { ...state, search: action.payload }
        // break;

        default:
            throw Error(`Unknown action type ${action.type}`)
        // break;
    }
}
function todoListReducer(state, action) {
    switch (action.type) {
        case Actions.MARK_ITEM:

            console.log("state :", state);
            console.log("action :", action);
            const updatedList = { todo: [...state.todo] }
            console.log("updatedList :", updatedList);
            // return [...state, todo: [action.payload]]
            return updatedList
        // break;

        default:
            throw Error(`Unknown action type ${action.type}`)
        // break;
    }
}

export {
    Actions,
    // ------
    filterReducer,
    filterState as filterStore,
    // -------
    todoListReducer,
    todoListState as todoListStore,
}