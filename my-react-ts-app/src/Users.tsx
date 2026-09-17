import UserCard from "./UserCard";

interface User {
  name: string;
  isLoggedIn: boolean;
}

const users: User[] = [
    {name: "Ishtiak", isLoggedIn: true},
    {name: "Ishmam", isLoggedIn: false},
    {name: "Kamal", isLoggedIn: true},
    {name: "Zamal", isLoggedIn: false},
    {name: "Aziz", isLoggedIn: true},
];

export default function Users(){
    return(
        <div>
        {
            users.map(user => <UserCard name={user.name}></UserCard>)
        }
        </div>
    )
}
