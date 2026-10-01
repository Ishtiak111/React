import UserCard from "./UsersCard";

interface User {
  name: string;
  isLoggedIn: boolean;
}

const users: User[] = [
  { name: "Ishtiak Ahmad", isLoggedIn: true },
  { name: "ASM Zonayed", isLoggedIn: false },
  { name: "Sabiha Zannat", isLoggedIn: true },
  { name: "Ishmam Shahariar", isLoggedIn: false },
  { name: "Riaz Uddin", isLoggedIn: false },
];


export default function Users(){
    return (
        <div>
            {
                users.map((user) => <UserCard name={user.name} islog={user.isLoggedIn}></UserCard>)
            }
        </div>
    )
}
