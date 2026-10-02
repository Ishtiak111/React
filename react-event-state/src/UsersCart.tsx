import './userCart.css'
export default function UserCart({user}){
    return(
        <div className='cart'>
            <h2>Name: {user.name}</h2>
            <p>Email: {user.email}</p>
        </div>
    )
}