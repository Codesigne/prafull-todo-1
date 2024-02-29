import { useEffect } from "react"
import { useState } from "react"




function Filter(params) {
    const state = {
        search: "",
        includCompleted: true
    }
    const [stateFilter, setStateFilter] = useState(state)
    function updateIncludeCompleted() {
        setStateFilter({ ...stateFilter, includCompleted: !stateFilter.includCompleted })
    }
    function updateSearch(e) {
        // console.log(e.target.value);
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