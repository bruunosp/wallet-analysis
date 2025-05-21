import imgFundo from "../assets/cartao-de-credito-control.jpg";
import Login from "./Login";

const Main = () => {
  return (
    <div 
      className="main-page__image"
      style={{ backgroundImage: `url(${imgFundo})` }}
    >
      <h1>Controle seus Gastos</h1>
      <p>Visualize, entenda e economize com seus cartões</p>
      
      <Login />
    </div>
  );
};

export default Main;
