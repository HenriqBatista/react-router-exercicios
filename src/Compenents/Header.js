import { useNavigate } from "react-router-dom";
import { goToHome, goToProfile, goToProduct } from "../Routes/Coordinator";


export function Header() {
    const navigate = useNavigate();
  
    return (
      <header>
        <button
          onClick={() => {
            goToHome(navigate);
          }}
        >
          Ir para página inicial
        </button>
        <button onClick={() => {goToProfile(navigate,"Henrique")}}>
          Ir para página de perfil
        </button>
        <button onClick={() =>{goToProduct(navigate, "2")}}>
          Ir para página de produtos
        </button>
      </header>
    );
  }
  

  