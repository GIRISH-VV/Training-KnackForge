import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import SummaryCard from "../components/SummaryCard";

const Dashboard = () => {
  const { state } = useContext(AuthContext);

  const activities = [
    { id: 1, action: "User John added", date: "2026-01-10" },
    { id: 2, action: "Report generated", date: "2026-01-09" },
    { id: 3, action: "Profile updated", date: "2026-01-08" }
  ];

  return (
    <div>
      <h2>Welcome, {state.user?.name} 👋</h2>

      {/* Summary Cards */}
      <div className="card-grid">
        <SummaryCard title="Total Users" value="25" />
        <SummaryCard title="Total Reports" value="12" />
        <SummaryCard title="Active Status" value="Online" />
      </div>

      {/* Charts Section */}
      <div className="charts">
        <div className="chart-box">
          <h4>User Role Distribution</h4>
          <p>Admin: 5</p>
          <p>Users: 20</p>
        </div>

        <div className="chart-box">
          <h4>Monthly Reports</h4>
          <p>Completed: 8</p>
          <p>Pending: 4</p>
        </div>
      </div>

      {/* Recent Activities */}
      <h3>Recent Activities</h3>
      <table className="activity-table">
        <thead>
          <tr>
            <th>Activity</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((item) => (
            <tr key={item.id}>
              <td>{item.action}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
// import SummaryCard from "../components/SummaryCard";
// import activities from "../data/activities";

// const Dashboard = () => {
//   const { state, dispatch } = useContext(AuthContext);

//   return (
//     <div className="page">
//       <h2>Welcome {state.user.name}</h2>

//       <div className="card-container">
//         <SummaryCard title="Total Users" value="12" />
//         <SummaryCard title="Total Reports" value="6" />
//         <SummaryCard title="Status" value="Active" />
//       </div>

//       <h3>Recent Activities</h3>
//       <table>
//         <tbody>
//           {activities.map((a) => (
//             <tr key={a.id}>
//               <td>{a.activity}</td>
//               <td>{a.date}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <button onClick={() => dispatch({ type: "LOGOUT" })}>Logout</button>
//     </div>
//   );
// };

// export default Dashboard;
