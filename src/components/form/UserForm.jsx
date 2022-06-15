import "./UserForm.css"

const UserForm = () => {
    const submitHandler = (e) => {
        e.preventDefault()
    }

    return <form action="" className="round-container" id="user-form" onSubmit={submitHandler}>
        <div className="input-container">
            <label htmlFor="username">Username</label>
            <input type="text" name="username"/>
        </div>
        <div className="input-container">
            <label htmlFor="age">Age (Years)</label>
            <input type="text" name="age"/>
        </div>
        <div className="submit-btn-container">
            <button type="submit">Add User</button>
        </div>
    </form>
}
 
export default UserForm;
