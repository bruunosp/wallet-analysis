import TotalSummary from "./TotalSummary";
import MonthlyChart from "./MonthlyChart";
import RecentTransactions from "./TransactionsTable";

const DashboardContent = ({ transactions, totalAmount, formatDate, sortByDateDesc, formatCurrency }) => {
  return (
    <div className="dashboard__content">
      <TotalSummary totalAmount={totalAmount} />
      <MonthlyChart transactions={transactions} />
      <RecentTransactions 
        transactions={transactions}
        formatDate={formatDate}
        sortByDateDesc={sortByDateDesc} 
        formatCurrency={formatCurrency} 
      />
    </div>
  );
};

export default DashboardContent;
