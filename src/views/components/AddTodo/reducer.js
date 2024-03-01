import { Actions } from "../../../store"
const addTodoReducer = (state, action) => {
    switch (action.type) {
        case Actions.SET_DESCRIPTION:
            return { taskDescription: action.payload }
        // break;
        // case Actions.ADD_TASK:
        //     return state
        // // break;

        default:
            throw new Error(`Can't find action typr : ${action.type}`)
        // break;
    }

}
export default addTodoReducer