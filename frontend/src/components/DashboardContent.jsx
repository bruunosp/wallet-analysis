import TotalSummary from "./TotalSummary";
import MonthlyChart from "./MonthlyChart";
import RecentTransactions from "./TransactionsTable";

const DashboardContent = ({ transactions, totalAmount }) => {
  return (
    <div className="dashboard__content">
      <TotalSummary totalAmount={totalAmount} />
      <MonthlyChart transactions={transactions} />
      <RecentTransactions transactions={transactions} />
    </div>
  );
};

export default DashboardContent;
