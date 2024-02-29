import { useEffect } from "react"
import { useState } from "react"

const initialState = {
    search: "",
    includCompleted: true
}


function Filter(params) {
    // const state = {
    //     search: "",
    //     includCompleted: true
    // }
    const [stateFilter, setStateFilter] = useState(initialState)
    function updateIncludeCompleted() {
        setStateFilter({ ...stateFilter, includCompleted: !stateFilter.includCompleted })
    }
    function updateSearch(e) {
        // console.log(e.target.value);
        // console.log("initialState :", initialState);
        // console.log("stateFilter :", stateFilter);

        setStateFilter({ ...stateFilter, search: e.target.value })
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
                    <input onChange={updateIncludeCompleted} type="checkbox" defaultChecked={stateFilter.includCompleted} /> Include Completed
                </div>
            </div>
        </>
    )
}

export default Filter
export { initialState }
