import { Actions } from "../../store";
// --------------------------------------
function userReducer(state, action) {
    switch (action.type) {
        case Actions.SET_USER_LOGIN:
            // console.log(`triggered : ${Actions.SET_USER_LOGIN} with state :`, state);
            return {
                ...state,
                name: action.payload.displayName,
                email: action.payload.email,
            }
        // break;

        default:
            throw new Error(`in userReducer no action like : ${Actions.SET_USER_LOGIN} with state :`, state);
        // break;
    }
}
export default userReducer