import { Actions } from "../../../store";

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
export default filterReducer