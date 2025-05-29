import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom';
import backGround1 from '../assets/images/cartao-de-credito-control.jpg';
import backGround2 from '../assets/images/bg-financas.jpg';


const Welcome = () => {
    const { username } = useContext(UserContext);                       // Traz o nome do usuário armazenado
    const navigate = useNavigate();                                     // Navega até a página desejada
    const [animarTexto, setMoveText] = useState(false);                 // Anima o texto para que ele se mova pela tela
    const [initialBackground, setBackGround2] = useState(backGround1);  // Troca a imagem de fundo
    const [overlayClaro, setOverlayClaro] = useState(false);                // Altera o esmaecimento para mais claro

    useEffect(() => {
        // Mover texto para parte superior esquerda, alterar imagem de fundo e diminuir o esmaecer após 3 segundos
        const setTimer = setTimeout(() => {
            setMoveText(true);
            setBackGround2(backGround2);
            setOverlayClaro(true)            
        }, 2000);

        // Mudar para página /dashboard
        const redirecionar = setTimeout(() => {
            navigate("/dashboard")
        }, 3500)

        return () => {
            clearTimeout(setTimer);
            clearTimeout(redirecionar);
        };
    }, [username, navigate]);

    return (

        <div 
            className={`welcome-screen ${overlayClaro ? "overlay--claro" : "overlay--escuro"}`}
            style={{ backgroundImage: `url(${initialBackground})` }}
        >
            <h1 className={`welcome-text ${animarTexto ? "move" : ""}`}>
                Bem vindo, {username}!
            </h1>
        </div>    
    )
}

export default Welcome