const TransactionsTable = ({ transactions }) => {
  return (
    <div className="dashboard__section">
      <h2 className="dashboard__title">Transações Recentes</h2>
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
            {[...transactions]
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .map((tx) => {
                const date = new Date(tx.date);
                return (
                  <tr key={tx.id}>
                    <td>
                      {isNaN(date)
                        ? "Data inválida"
                        : date.toLocaleDateString("pt-BR")}
                    </td>
                    <td>{tx.description}</td>
                    <td>
                      {tx.amount.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsTable;
