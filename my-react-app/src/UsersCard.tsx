export default function UserCard({name, islog}){
    return (
        <div className={islog ? "user2":"user"}>
            <h3>Name: {name}</h3>
            <h4>Is Logged In: {islog}</h4>
        </div>
    )
}