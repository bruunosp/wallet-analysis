export const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return isNaN(date) ? "Data inválida" : date.toLocaleDateString("pt-BR");
};

export const sortByDateDesc = (a, b) =>
  new Date(b.date) - new Date(a.date);

export const formatCurrency = (value) =>
  value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  
