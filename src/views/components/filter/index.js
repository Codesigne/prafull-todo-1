import { useEffect } from "react"
import { useState } from "react"
import { useContext_1 } from "../../../contexts"

// const initialState = {
//     search: "",
//     includCompleted: true
// }


function Filter(params) {
    const { Actions, filterState, filterDispatch } = useContext_1();
    // console.log("Actions, filterState, filterDispatch :", Actions, filterState, filterDispatch);
    // const state = {
    //     search: "",
    //     includCompleted: true
    // }
    // const [stateFilter, setStateFilter] = useState(initialState)
    function updateIncludeCompleted(e) {
        console.log("e :", e);
        // setStateFilter({ ...stateFilter, includCompleted: !stateFilter.includCompleted })
        filterDispatch({
            type: Actions.INCLUDE_COMPLETED,
            payload: e.target.checked
        })

    }
    function updateSearch(e) {
        // // console.log(e.target.value);
        // // console.log("initialState :", initialState);
        // // console.log("stateFilter :", stateFilter);

        // setStateFilter({ ...stateFilter, search: e.target.value })
        filterDispatch({
            type: Actions.SEARCH,
            payload: e.target.value
        })
    }

    return (
        <>
            <div className="card" >
                <div className="card-body">
                    <div className="input-group mb-3">
                        <input type="text"
                            className="form-control"
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby="button-addon2"
                            onChange={e => updateSearch(e)}
                        />
                    </div>
                    <input onChange={updateIncludeCompleted} type="checkbox" defaultChecked={filterState.includCompleted} /> Include Completed
                </div>
            </div>
        </>
    )
}

export default Filter

