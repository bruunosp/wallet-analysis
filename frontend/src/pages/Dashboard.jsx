import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import imgFundo from "../assets/images/cartao-de-credito-control.jpg";
import novaImagem from "../assets/images/bg-financas.jpg";
import { UserContext } from "../context/UserContext";

const Dashboard = () => {
  const { username } = useContext(UserContext);
  const navigate = useNavigate();
  const [animarTexto, setAnimarTexto] = useState(false);
  const [imagemFundo, setImagemFundo] = useState(imgFundo);
  const [esmaecer, setEsmaecer] = useState(false); // começa false para não aplicar a classe até estar montado
  const [telaIniciada, setTelaIniciada] = useState(false); // controle de início

  useEffect(() => {
    if (!username) {
      navigate("/");
    } else {
      // inicia a tela com pequeno delay para aplicar fade-in
      setTelaIniciada(true);
      setTimeout(() => {
        setEsmaecer(true); // ativa o esmaecimento inicial
      }, 100); // leve delay para o ::after aplicar transição
    }

    const animarTimer = setTimeout(() => {
      setAnimarTexto(true);
      setImagemFundo(novaImagem);
      setEsmaecer(false); // remove o escuro forte para o leve
    }, 3000);

    return () => clearTimeout(animarTimer);
  }, [username, navigate]);

  if (!telaIniciada) return null; // impede renderização antes do início

  return (
    <div
      className={`dashboard__image ${esmaecer ? "overlay-escuro" : "overlay-claro"}`}
      style={{ backgroundImage: `url(${imagemFundo})` }}
    >
      <h1 className={`dashboard__text ${animarTexto ? "dashboard__text--move" : ""}`}>
        Bem-vindo, {username}!
      </h1>
    </div>
  );
};

export default Dashboard;
