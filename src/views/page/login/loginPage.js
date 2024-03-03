function LoginPage(params) {
    return (
        <div className="card">
            <div className="py-4 px-5 card-header">
                <h5 className="mb-0"> Login </h5>
            </div>
            <div className="p-5 card-body">
                <p className="lead"> Already our customer ?</p>
                <p className="text-muted text-sm"> Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet.</p>
                <hr className="my-4" />
                <form action="/customer-orders" className="">
                    <div className="mb-4">
                        <label className="form-label" for="emailLogin"> Email</label>
                        <input type="text" id="emailLogin" className="form-control" />
                    </div>
                    <div className="mb-4">
                        <label className="form-label" for="passwordLogin"> Password</label>
                        <input type="password" id="passwordLogin" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-dark">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sign-in-alt" className="svg-inline--fa fa-sign-in-alt fa-w-16 me-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z">
                            </path>
                        </svg> Log in</button>
                </form>
            </div>
        </div >
    )
}

export default LoginPage