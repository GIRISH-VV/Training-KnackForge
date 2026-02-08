import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { state, dispatch } = useContext(AuthContext);
  const location = useLocation();

  const profileData = location.state || state.user;

  const [name, setName] = useState(profileData.name);
  const [email, setEmail] = useState(profileData.email);
  const [role, setRole] = useState(profileData.role);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedUser = { name, email, role };

    localStorage.setItem("user", JSON.stringify(updatedUser));
    dispatch({ type: "UPDATE_USER", payload: updatedUser });

    setSuccess(true);
  };

  return (
    <div className="profile-page">
      <h2>Profile</h2>

      {success && <p className="success">Profile updated successfully</p>}

      <form className="profile-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />

        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Role</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option>Admin</option>
          <option>User</option>
        </select>

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Profile;
// import { useLocation } from "react-router-dom";
// import { useContext, useState } from "react";
// import { AuthContext } from "../context/AuthContext";

// const Profile = () => {
//   const location = useLocation();
//   const { state, dispatch } = useContext(AuthContext);
//   const userData = location.state || state.user;

//   const [form, setForm] = useState(userData);

//   const handleSave = () => {
//     dispatch({ type: "UPDATE_USER", payload: form });
//     alert("Profile Updated Successfully");
//   };

//   return (
//     <div className="page">
//       <h2>Profile</h2>

//       <input
//         value={form.name}
//         onChange={(e) => setForm({ ...form, name: e.target.value })}
//       />
//       <input
//         value={form.email}
//         onChange={(e) => setForm({ ...form, email: e.target.value })}
//       />
//       <select
//         value={form.role}
//         onChange={(e) => setForm({ ...form, role: e.target.value })}
//       >
//         <option>Admin</option>
//         <option>User</option>
//       </select>

//       <button onClick={handleSave}>Save</button>
//     </div>
//   );
// };

// export default Profile;
