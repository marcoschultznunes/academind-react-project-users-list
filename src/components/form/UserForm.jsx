import { useRef, useState } from "react";
import "./UserForm.css";
import validate from '../validators/User';

const UserForm = (props) => {
    const usernameRef = useRef();
    const ageRef = useRef();
    const [errors, setErrors] = useState([]);

    const changeHandler = (e) => {
        setErrors([])
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const username = usernameRef.current.value;
        const age = ageRef.current.value;

        const validationErrors = validate(username, age);

        if(validationErrors.length === 0){
            props.addUser(username, Number.parseInt(age));
            usernameRef.current.value = "";
            ageRef.current.value = "";
        }

        setErrors(validationErrors);
    };

    return <form action="" className="round-container" id="user-form" onSubmit={submitHandler}>
        <div className="input-container">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" ref={usernameRef} onChange={changeHandler}/>
        </div>
        <div className="input-container">
            <label htmlFor="age">Age (Years)</label>
            <input type="text" name="age" ref={ageRef} onChange={changeHandler}/>
        </div>
        <div className="error-msgs-container">
            {errors.map((e, i) => <p key={i}>* {e}</p>)}
        </div>
        <div className="submit-btn-container">
            <button type="submit">Add User</button>
        </div>
    </form>;
};
 
export default UserForm;
