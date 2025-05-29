const TotalSummary = ({ totalAmount }) => {
  return (
    <div className="dashboard__section">
      <h2 className="dashboard__title">Resumo Geral</h2>
      <p className="dashboard__total">
        Total gasto:{" "}
        {totalAmount.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
    </div>
  );
};

export default TotalSummary;
