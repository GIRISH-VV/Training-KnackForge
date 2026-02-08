import { useState } from "react";
import { reports as reportData } from "../data/reports";

const Reports = () => {
  const [month, setMonth] = useState("All");
  const [status, setStatus] = useState("All");

  const filteredReports = reportData.filter((report) => {
    const matchMonth = month === "All" || report.month === month;
    const matchStatus = status === "All" || report.status === status;
    return matchMonth && matchStatus;
  });

  const completedCount = filteredReports.filter(
    (r) => r.status === "Completed"
  ).length;

  const pendingCount = filteredReports.filter(
    (r) => r.status === "Pending"
  ).length;

  return (
    <div>
      <h2>Reports</h2>

      {/* Filters + Export */}
      <div className="report-controls">
        <select value={month} onChange={(e) => setMonth(e.target.value)}>
          <option>All</option>
          <option>January</option>
          <option>February</option>
        </select>

        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>All</option>
          <option>Completed</option>
          <option>Pending</option>
        </select>

        <select>
          <option>Export</option>
          <option>Excel</option>
          <option>PDF</option>
        </select>
      </div>

      {/* Summary */}
      <div className="report-summary">
        <span>Completed: {completedCount}</span>
        <span>Pending: {pendingCount}</span>
      </div>

      {/* Table */}
      <table className="report-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Month</th>
            <th>Status</th>
            <th>Created By</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {filteredReports.map((report) => (
            <tr key={report.id}>
              <td>{report.title}</td>
              <td>{report.month}</td>
              <td>
                <span className={`badge ${report.status}`}>
                  {report.status}
                </span>
              </td>
              <td>{report.createdBy}</td>
              <td>{report.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reports;
