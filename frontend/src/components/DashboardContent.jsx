import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const DashboardContent = () => {
  const [transactions, setTransactions] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  // Conexão com a API
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/transactions");
        const data = await res.json();
        setTransactions(data);

        const total = data.reduce((acc, tx) => acc + tx.amount, 0);
        setTotalAmount(total);
      } catch (err) {
        console.error("Erro ao buscar transações:", err);
      }
    };

    fetchTransactions();
  }, []);

    const getGastosPorMes = (transactions) => {
    const meses = {};
    const nomesDosMeses = [
        "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
        "Jul", "Ago", "Set", "Out", "Nov", "Dez"
    ];

    transactions.forEach((tx) => {
        const date = new Date(tx.date);
        if (isNaN(date)) return;

        const year = date.getFullYear();
        const month = date.getMonth();

        const key = `${year}-${month}`;
        if (!meses[key]) meses[key] = 0;
        meses[key] += tx.amount;
    });

    return Object.entries(meses)
        .map(([key, total]) => {
        const [year, month] = key.split("-").map(Number);
        return {
            mesAbreviado: nomesDosMeses[month],
            ano: year,
            year,
            month,
            total
        };
        })
        .sort((a, b) => a.year !== b.year ? a.year - b.year : a.month - b.month);
    };


  return (
    <div className="dashboard__content">
      {/* Resumo Geral */}
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

      {/* Gráfico de Gastos por Mês */}
      <div className="dashboard__section">
        <h2 className="dashboard__title">Gastos por Mês</h2>
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={getGastosPorMes(transactions)} margin={{ top: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />

                {/* Primeiro eixo X: mês abreviado */}
                <XAxis
                dataKey="mesAbreviado"
                tickLine={false}
                axisLine={false}
                height={30}
                />

                {/* Segundo eixo X: ano centralizado a cada 12 meses */}
                <XAxis
                dataKey="ano"
                xAxisId="ano"
                interval={0}
                tickLine={false}
                axisLine={false}
                height={20}
                tick={({ x, y, payload, index }) => {
                    const previous = index > 0 ? getGastosPorMes(transactions)[index - 1].ano : null;
                    const current = payload.value;
                    const shouldShow = previous !== current;

                    return shouldShow ? (
                    <text
                        x={x}
                        y={y + 10}
                        textAnchor="middle"
                        fontSize={12}
                        fill="#666"
                    >
                        {current}
                    </text>
                    ) : null;
                }}
                />

                <YAxis />
                <Tooltip
                formatter={(value) =>
                    value.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                    })
                }
                />
                <Bar dataKey="total" fill="#0043A6" />
            </BarChart>
        </ResponsiveContainer>

      </div>

      {/* Lista de Transações Recentes */}
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
                .sort((a, b) => new Date(b.date) - new Date(a.date)) // mais recentes primeiro
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
    </div>
  );
};

export default DashboardContent;
