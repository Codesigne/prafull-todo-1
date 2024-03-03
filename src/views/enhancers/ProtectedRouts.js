import { USECONTEXT_1 } from "../../contexts";
import NoPage from "../page/NoPage";


function ProtectedRouts({ permission, children }) {
    // const {hasPermission}= useAutherization()
    const { Actions, state, dispatch, hasPermission } = USECONTEXT_1()

    if (!hasPermission(permission)) {
        return <NoPage />
    }
    return children
}

export default ProtectedRouts;