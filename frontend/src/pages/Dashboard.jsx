import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import imgFundo from "../assets/cartao-de-credito-control.jpg";
import novaImagem from "../assets/mercado-pago.png";
import { UserContext } from "../context/UserContext";

const Dashboard = () => {
  const { username } = useContext(UserContext);
  const navigate = useNavigate();
  const [animarTexto, setAnimarTexto] = useState(false);
  const [imagemFundo, setImagemFundo] = useState(imgFundo);

  useEffect(() => {
    if (!username) {
      navigate("/");
    }

    const timer = setTimeout(() => {
      setAnimarTexto(true);
      setImagemFundo(novaImagem);
    }, 4000);

    return () => clearTimeout(timer);
  }, [username, navigate]);

  return (
    <div
      className="dashboad-lengths__image animated-bg"
      style={{ backgroundImage: `url(${imagemFundo})` }}
    >
      <h1 className={`dashboard-lenghts__text ${animarTexto ? "dashboard-lenghts__move" : ""}`}>
        Bem vindo, {username}!
      </h1>
    </div>
  );
};

export default Dashboard;
