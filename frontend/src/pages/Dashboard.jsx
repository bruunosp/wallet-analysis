import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { useState, useEffect } from "react";
import { fetchTransactions } from "../services/transactionsAPI";
import BackgroundLayout from "../components/BackgroundLayout"
import backGround2 from '../assets/images/bg-financas.jpg';
import DashboardContent from "../components/DashboardContent";

const Dashboard = () => {
  // Armazena o nome do usuário digitado na página inicial
  const { username } = useContext(UserContext);

  // Traz os dados da API e faz o carregamento inicial e final das variáveis
  const [transactions, setTransactions] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const getTransactions = async () => {
      try {
        const data = await fetchTransactions();
        setTransactions(data);
        const total = data.reduce((acc, tx) => acc + tx.amount, 0);
        setTotalAmount(total);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    getTransactions();
    }, []);

  // ______________________________________________________________________________________________
  // Retorna os components para formar a página
  return (
    <>
      <BackgroundLayout
        background={backGround2}
        title={`Bem vindo, ${username}!`}
        >
        
      </BackgroundLayout>
      <DashboardContent 
        transactions={transactions}
        totalAmount={totalAmount}
        />
    </>
  )
}

export default Dashboard