function UserCard({user}){
    return <div className="user-card">
        <h3>{user.profile.name} </h3>
        <h4>{user.profile.company}</h4>
        <h5>{user.profile.addres}</h5>
    </div>
}
export default UserCard