const initialState = {
    name: undefined,
    email: undefined,
    role: 'user',
    isAuthorised: function () {
        console.log("this of initial; state :", this);
        console.log("!!this.email :", !!this.email);
        return !!this.email
    },
}
// --------------------------------------
export default initialState