// import { useEffect } from "react"
// import { useState } from "react"
import { useEffect } from "react";
import { USECONTEXT_1 } from "../../../contexts"
// import useAutherization from "../../../services/authourization";


// const initialState = {
//     search: "",
//     includCompleted: true
// }


function Filter(params) {
    const { Actions, state, dispatch, hasPermission } = USECONTEXT_1();
    // console.log("Actions, state, dispatch :", Actions, state, dispatch);
    // const state = {
    //     search: "",
    //     includCompleted: true
    // }
    // const [stateFilter, setStateFilter] = useState(initialState)
    function updateIncludeCompleted(e) {
        console.log("e :", e);
        // setStateFilter({ ...stateFilter, includCompleted: !stateFilter.includCompleted })
        dispatch.filterDispatch({
            type: Actions.INCLUDE_COMPLETED,
            payload: e.target.checked
        })

    }
    function updateSearch(e) {
        // // console.log(e.target.value);
        // // console.log("initialState :", initialState);
        // // console.log("stateFilter :", stateFilter);

        // setStateFilter({ ...stateFilter, search: e.target.value })
        dispatch.filterDispatch({
            type: Actions.SEARCH,
            payload: e.target.value
        })
    }



    // const { hasPermission } = useAutherization('user')

    useEffect(() => {
        console.log("hasPermission :", hasPermission);
        console.log("hasPermission('toAdd') :", hasPermission('toAdd'));
        console.log("hasPermission('toComplete') :", hasPermission('toComplete'));
        console.log("hasPermission('toFilter') :", hasPermission('toFilter'));
    }, [state])

    return (
        <>
            <div className="card" >
                <div className="card-body">
                    <div className="input-group mb-3">
                        {hasPermission('toSearch') && <input type="text"
                            className="form-control"
                            placeholder="Search Task"
                            aria-label="Search Task"
                            aria-describedby="button-addon2"
                            onChange={e => updateSearch(e)}
                        />}
                    </div>
                    {hasPermission('toFilter')
                        &&
                        (
                            <>
                                <input onChange={updateIncludeCompleted} type="checkbox" defaultChecked={state.filterState.includCompleted} /> includes Completed
                            </>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Filter

