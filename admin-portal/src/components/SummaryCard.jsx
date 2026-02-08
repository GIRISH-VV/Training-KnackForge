// const SummaryCard = ({ title, value }) => {
//   return (
//     <div className="card">
//       <h4>{title}</h4>
//       <h2>{value}</h2>
//     </div>
//   );
// };

// export default SummaryCard;
const SummaryCard = ({ title, value }) => {
  return (
    <div className="summary-card">
      <h4>{title}</h4>
      <p>{value}</p>
    </div>
  );
};

export default SummaryCard;
