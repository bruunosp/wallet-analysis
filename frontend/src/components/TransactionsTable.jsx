const TransactionsTable = ({ transactions, formatDate, sortByDateDesc, formatCurrency }) => {
  
const handleExportCSV = () => {
  const header = "Data;Descrição;Valor\n";

  const rows = transactions
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map((tx) => {
      const date = new Date(tx.date);
      const formattedDate = isNaN(date)
        ? "Data inválida"
        : date.toLocaleDateString("pt-BR");

      // Usa ponto como separador decimal (formato brasileiro com ,)
      const formattedAmount = tx.amount
        .toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
        .replace(".", "")
        .replace(",", ".");

      return `${formattedDate};"${tx.description}";${formattedAmount}`;
    });

  const csv = header + rows.join("\n");

  const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "transacoes.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


  return (
    <div className="dashboard__section">
      <h2 className="dashboard__title">Transações Recentes
        <button onClick={handleExportCSV} className="dashboard__export-button">
          📤 Exportar CSV
        </button>
      </h2>
      <div className="dashboard__transactions-table">
        <table>
          <thead>
            <tr>
              <th>Data</th>
              <th>Descrição</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {[...transactions].sort(sortByDateDesc).map((tx) => (
              <tr key={tx.id}>
                <td>{formatDate(tx.date)}</td>
                <td>{tx.description}</td>
                <td>{formatCurrency(tx.amount)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsTable;
