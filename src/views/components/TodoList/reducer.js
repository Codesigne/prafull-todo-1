import { Actions } from "../../../store";

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

        // case Actions.ADD_TASK:
        //     return [...state, {
        //         id: 1,
        //         text: action.payload,
        //         isCompleted: false
        //     }]
        // // break;

        default:
            throw Error(`Unknown action type ${action.type}`)
        // break;
    }
}
export default todoListReducer