
export default function UserDetails({user}){
    return (
        <div>
            <p>Name: {user.name}</p>
            <p>email: {user.email}</p>
        </div>
    )
}