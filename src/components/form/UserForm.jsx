import { useRef } from "react"
import "./UserForm.css"

const UserForm = (props) => {
    const usernameRef = useRef()
    const ageRef = useRef()

    const submitHandler = (e) => {
        e.preventDefault()
        props.addUser(usernameRef.current.value, ageRef.current.value)
        usernameRef.current.value = ""
        ageRef.current.value = ""
    }

    return <form action="" className="round-container" id="user-form" onSubmit={submitHandler}>
        <div className="input-container">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" ref={usernameRef}/>
        </div>
        <div className="input-container">
            <label htmlFor="age">Age (Years)</label>
            <input type="text" name="age" ref={ageRef}/>
        </div>
        <div className="error-msgs-container">
            <p>Username is required</p>
            <p>Age is required</p>
        </div>
        <div className="submit-btn-container">
            <button type="submit">Add User</button>
        </div>
    </form>
}
 
export default UserForm;
