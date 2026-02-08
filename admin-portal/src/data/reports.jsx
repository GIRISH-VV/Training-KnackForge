// import { useState } from "react";
// import reports from "./reports";

// const Reports = () => {
//   const [status, setStatus] = useState("");

//   const filteredReports = reports.filter((r) =>
//     status ? r.status === status : true
//   );

//   return (
//     <div className="page">
//       <h2>Reports</h2>

//       <select onChange={(e) => setStatus(e.target.value)}>
//         <option value="">All</option>
//         <option>Completed</option>
//         <option>Pending</option>
//       </select>

//       <table>
//         <tbody>
//           {filteredReports.map((r) => (
//             <tr key={r.id}>
//               <td>{r.title}</td>
//               <td>{r.month}</td>
//               <td className={r.status.toLowerCase()}>{r.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <button>Export Excel</button>
//       <button>Export PDF</button>
//     </div>
//   );
// };

// export default Reports;
export const reports = [
  {
    id: 1,
    title: "System Performance Report",
    month: "January",
    status: "Completed",
    createdBy: "Admin",
    date: "2026-01-05"
  },
  {
    id: 2,
    title: "User Activity Report",
    month: "February",
    status: "Pending",
    createdBy: "Admin",
    date: "2026-02-10"
  },
  {
    id: 3,
    title: "Security Audit Report",
    month: "January",
    status: "Completed",
    createdBy: "Admin",
    date: "2026-01-20"
  }
];