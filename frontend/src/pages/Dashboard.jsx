import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import BackgroundLayout from "../components/BackgroundLayout"
import backGround2 from '../assets/images/bg-financas.jpg';

const Dashboard = () => {
  const { username } = useContext(UserContext);

  return (
    <BackgroundLayout
      background={backGround2}
      title={`Bem vindo, ${username}!`}
    >
      
    </BackgroundLayout>
  )
}

export default Dashboard