import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setUsername } = useContext(UserContext);
  const [inputName, setInputName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputName.trim() !== "") {
      setUsername(inputName);
      navigate("/welcome");
    }
  };

  return (
    <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="login-input"
          type="text"
          placeholder="Digite seu nome"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <button type="submit" className="login-button">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
