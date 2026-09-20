import { use } from "react"
import UserDetails from "./UserDetails";

export default function Users({userDataPromise}){
  const users = use(userDataPromise);
  
  return(
    <div>
      <h2>Users: {users.length}</h2>
      {
        users.map(user => <UserDetails user={user}></UserDetails>)
      }
    </div>
  )
}





// import { use } from "react";

// function Users({userDataPromise}){
//   const users = use(userDataPromise);
//   console.log(users);
//   return (
//     <div>
//       <h2>Users: </h2>
//     </div>
//   )
// }
// export default Users;




// import { use } from "react";

// function Users({ usersDataPromise }) {
//   const users = use(usersDataPromise);
//   console.log(users);
//   return (
//     <div>
//       <h2>Users: </h2>
//     </div>
//   );
// }
// export default Users;

// //callback:
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });

// // async await:
// async function loadData() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();
//   return data;
// }

// // arrow fun:
// const loadData2 = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();
//   return data;
// };
