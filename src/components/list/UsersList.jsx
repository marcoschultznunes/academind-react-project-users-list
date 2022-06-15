import './UsersList.css'

const UsersList = (props) => {
    const {users} = props

    const renderUsersList = users.length === 0 ?
        <h3>No users</h3> :
        <ul>
            {users.map((u, i) => <li key={i}>{`${u.username} (${u.age} years old)`}</li>)}
        </ul>

    return <div className="round-container users-list-container">
        {renderUsersList}
    </div>;
}
 
export default UsersList;
