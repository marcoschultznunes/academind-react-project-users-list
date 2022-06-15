import React, { useState } from "react";
import UserForm from "./components/form/UserForm";
import UsersList from "./components/list/UsersList";

/*
    App consists of:

    An UserForm, which adds users to the users list
    An UserList, which displays the list of users
*/
const App = () => {
    const [users, setUsers] = useState([]);

    const addUser = (username, age) => {
        setUsers(prevUsers => [...prevUsers, {
            username: username,
            age: age
        }]);
    };

    return <React.Fragment>
        <UserForm addUser={addUser}/>
        <UsersList users={users}/>
    </React.Fragment>;
};

export default App;
