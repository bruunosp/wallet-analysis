import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import imgFundo from "../assets/cartao-de-credito-control.jpg";
import { UserContext } from "../context/UserContext";

const Dashboard = () => {
  const { username } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!username) {
      navigate("/");
    }
  }, [username, navigate]);

  return (
    <div
      className="main-page__image"
      style={{ backgroundImage: `url(${imgFundo})` }}
    >
      <h1 className="main-page__text">Bem vindo, {username}!</h1>
    </div>
  );
};

export default Dashboard;
