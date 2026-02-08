// import { useEffect, useState } from "react";
// import API from "../services/api";
// import UserTable from "../components/UserTable";

// function Users() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchUsers = async () => {
//     try {
//       setLoading(true);
//       const res = await API.get("/users");
//       setUsers(res.data);
//     } catch (err) {
//       console.error(err.response?.data || err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   return (
//     <div className="page-container">
//       <h2>User List</h2>

//       {loading && <p>Loading users...</p>}

//       {!loading && (
//         <UserTable users={users} fetchUsers={fetchUsers} />
//       )}
//     </div>
//   );
// }

// export default Users;


import { useEffect, useState } from "react";
import API from "../services/api";
import UserTable from "../components/UserTable";

function Users() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const fetchUsers = async () => {
    const res = await API.get("/users");
    setUsers(res.data);
  };

  const fetchMe = async () => {
    const res = await API.get("/users/me");
    setCurrentUser(res.data.user);
  };

  useEffect(() => {
    fetchUsers();
    fetchMe();
  }, []);

  return (
    <div className="page-container">
      <h2>User List</h2>
      <UserTable
        users={users}
        fetchUsers={fetchUsers}
        currentUser={currentUser}
      />
    </div>
  );
}

export default Users;

