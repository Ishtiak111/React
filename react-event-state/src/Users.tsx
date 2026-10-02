import { use } from "react";
import UserCart from "./UsersCart";

function Users({userDataPromise}){
    const users = use(userDataPromise);
    console.log(users);
    return(
        <div>
            <h2>Users: {users.length}</h2>
            {
                users.map((user) => <UserCart user={user}></UserCart>)
            }
        </div>
    )
}
export default Users;