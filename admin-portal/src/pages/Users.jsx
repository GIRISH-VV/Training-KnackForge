import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { users as userData } from "../data/users";

const Users = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [role, setRole] = useState("All");
  const [selectedUser, setSelectedUser] = useState(null);

  const filteredUsers = userData.filter((user) => {
    const matchSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());

    const matchRole = role === "All" || user.role === role;

    return matchSearch && matchRole;
  });

  return (
    <div>
      <h2>Users</h2>

      {/* Filters */}
      <div className="user-filters">
        <input
          type="text"
          placeholder="Search by name or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option>All</option>
          <option>Admin</option>
          <option>User</option>
        </select>
      </div>

      {/* User Table */}
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => setSelectedUser(user)}>
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {selectedUser && (
        <div className="modal-backdrop">
          <div className="modal">
            <h3>User Details</h3>
            <p><b>Name:</b> {selectedUser.name}</p>
            <p><b>Email:</b> {selectedUser.email}</p>
            <p><b>Role:</b> {selectedUser.role}</p>

            <div className="modal-actions">
              <button
                onClick={() =>
                  navigate("/profile", { state: selectedUser })
                }
              >
                View Profile
              </button>
              <button onClick={() => setSelectedUser(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;