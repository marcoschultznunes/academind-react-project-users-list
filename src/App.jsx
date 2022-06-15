import React, { useState } from "react";
import UserForm from "./components/form/UserForm";
import UsersList from "./components/list/UsersList";

const App = () => {
    const [users, setUsers] = useState([])

    const addUser = (username, age) => {
        setUsers(prevUsers => [...prevUsers, {
            username: username,
            age: age
        }])
    }

    return <React.Fragment>
        <UserForm addUser={addUser}/>
        <UsersList users={users}/>
    </React.Fragment>;
};

export default App;
