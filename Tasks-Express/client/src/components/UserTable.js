
// import API from "../services/api";

// function UserTable({ users, fetchUsers }) {
//   const loggedInUser = JSON.parse(localStorage.getItem("user")); 
//   const isAdmin = loggedInUser?.role === "admin";

//   const deleteUser = async (id) => {
//     if (!window.confirm("Are you sure?")) return;
//     await API.delete(`/users/${id}`);
//     fetchUsers();
//   };

//   const editUser = async (id) => {
//     const name = prompt("Enter new name");
//     const role = prompt("Enter role (admin/user)");
//     if (!name || !role) return;

//     await API.put(`/users/${id}`, { name, role });
//     fetchUsers();
//   };

//   return (
//     <table className="user-table">
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Email</th>
//           <th>Role</th>
//           {isAdmin && <th>Actions</th>}
//         </tr>
//       </thead>

//       <tbody>
//         {users.map((u) => (
//           <tr key={u._id}>
//             <td>{u.name}</td>
//             <td>{u.email}</td>
//             <td>{u.role}</td>

//             {isAdmin && (
//               <td>
//                 <button onClick={() => editUser(u._id)}>Edit</button>
//                 <button onClick={() => deleteUser(u._id)}>Delete</button>
//               </td>
//             )}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }

// export default UserTable;
import { useState } from "react";
import API from "../services/api";
import "./UserTable.css";

function UserTable({ users, fetchUsers, currentUser }) {
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editRole, setEditRole] = useState("");

  const isAdmin = currentUser?.role === "admin";

  const startEdit = (user) => {
    setEditingId(user._id);
    setEditName(user.name);
    setEditRole(user.role);
  };

  const saveEdit = async (id) => {
    await API.put(`/users/${id}`, {
      name: editName,
      role: editRole,
    });
    setEditingId(null);
    fetchUsers();
  };

  const deleteUser = async (id) => {
    if (!window.confirm("Delete this user?")) return;
    await API.delete(`/users/${id}`);
    fetchUsers();
  };

  return (
    <table className="user-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          {isAdmin && <th>Action</th>}
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <tr key={user._id}>
            <td>
              {editingId === user._id ? (
                <input
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
              ) : (
                user.name
              )}
            </td>

            <td>{user.email}</td>

            <td>
              {editingId === user._id ? (
                <select
                  value={editRole}
                  onChange={(e) => setEditRole(e.target.value)}
                >
                  <option value="user">user</option>
                  <option value="admin">admin</option>
                </select>
              ) : (
                user.role
              )}
            </td>

            {isAdmin && (
              <td>
                {editingId === user._id ? (
                  <>
                    <button className="btn save" onClick={() => saveEdit(user._id)}>Save</button>
                    <button className="btn cancel" onClick={() => setEditingId(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button className="btn edit" onClick={() => startEdit(user)}>Edit</button>
                    <button className="btn delete" onClick={() => deleteUser(user._id)}>Delete</button>
                  </>
                )}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;

