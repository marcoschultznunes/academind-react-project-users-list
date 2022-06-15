import { useRef, useState } from "react";
import "./UserForm.css";
import validate from '../validators/User';

const UserForm = (props) => {
    /* The input refs */
    const usernameRef = useRef();
    const ageRef = useRef();

    /* errors: validation error messages as a list */
    const [errors, setErrors] = useState([]);

    /* changeHandler: resets the errors when a value is changed */
    const changeHandler = (e) => {
        setErrors([]);
    };

    /* submitHandler: validates, submits, and clears the input fields */
    const submitHandler = (e) => {
        e.preventDefault();
        const username = usernameRef.current.value;
        const age = ageRef.current.value;

        // validate: returns an array with an error message for each field
        const validationErrors = validate(username, age);

        if(validationErrors.length === 0){  // submits if no errors 
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
            {errors.map((e, i) => <p key={i}>* {e}</p>) /* Each error is displayed in a p */} 
        </div>
        <div className="submit-btn-container">
            <button type="submit">Add User</button>
        </div>
    </form>;
};
 
export default UserForm;
