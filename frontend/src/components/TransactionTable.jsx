const TransactionTable = ({ transactions }) => {
  return (
    <div className="card">
      <h2>Transações Recentes</h2>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Categoria</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.id}>
              <td>{tx.date}</td>
              <td>{tx.description}</td>
              <td>{tx.amount.toFixed(2)}</td>
              <td>{tx.category || 'Não categorizado'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
