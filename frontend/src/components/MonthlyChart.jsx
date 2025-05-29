import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const MonthlyChart = ({ transactions }) => {
  const nomesDosMeses = [
    "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
    "Jul", "Ago", "Set", "Out", "Nov", "Dez"
  ];

  const gastosPorMes = () => {
    const meses = {};

    transactions.forEach((tx) => {
      const date = new Date(tx.date);
      if (isNaN(date)) return;

      const year = date.getFullYear();
      const month = date.getMonth();
      const key = `${year}-${month}`;

      if (!meses[key]) meses[key] = 0;
      meses[key] += tx.amount;
    });

    return Object.entries(meses).map(([key, total]) => {
      const [year, month] = key.split("-").map(Number);
      return {
        mesAbreviado: nomesDosMeses[month],
        ano: year,
        year,
        month,
        total
      };
    }).sort((a, b) => a.year !== b.year ? a.year - b.year : a.month - b.month);
  };

  const formatarValorK = (valor) => {
    return valor >= 1000
      ? `R$${(valor / 1000).toFixed(1)}K`
      : valor.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        });
  };

  const data = gastosPorMes();

  return (
    <div className="dashboard__section">
      <h2 className="dashboard__title">Gastos por Mês</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mesAbreviado" tickLine={false} axisLine={false} height={30} />
          <XAxis
            dataKey="ano"
            xAxisId="ano"
            interval={0}
            tickLine={false}
            axisLine={false}
            height={20}
            tick={({ x, y, payload, index }) => {
              const previous = index > 0 ? data[index - 1].ano : null;
              const current = payload.value;
              return previous !== current ? (
                <text x={x} y={y + 10} textAnchor="middle" fontSize={12} fill="#666">
                  {current}
                </text>
              ) : null;
            }}
          />
          <YAxis />
          <Tooltip
            formatter={(value) =>
              value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
            }
          />
          <Bar
            dataKey="total"
            fill="#0043A6"
            label={({ x, y, value }) => (
              <text x={x + 5} y={y - 7} fontSize={8.5} fill="#333">
                {formatarValorK(value)}
              </text>
            )}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyChart;
