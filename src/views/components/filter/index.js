function Filter(params) {
    return (
        <>


            <div className="card" >
                <div className="card-body">
                    {/* <h5 className="card-title">Card title</h5> */}
                    {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a> */}
                    <div className="input-group mb-3">
                        <input type="text"
                            className="form-control"
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby="button-addon2"
                        />
                        {/* <button className="btn btn-outline-secondary" type="button" > Search </button> */}
                    </div>
                    <input type="checkbox" /> Include Completed
                </div>
            </div>


            <div className="row">

            </div>
        </>
    )
}

export default Filter