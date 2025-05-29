import Login from "./Login";
import imgFundo from "../assets/images/cartao-de-credito-control.jpg";

const Main = () => {
  return (
    <div 
      className="main-page__image overlay--medio"
      style={{ backgroundImage: `url(${imgFundo})` }}
    >
      <h1>Controle seus Gastos</h1>
      <p>Visualize, entenda e economize com seus cartões</p>
      
      <Login />
    </div>
  );
};

export default Main;
