 import { Header } from "../Compenents/Header";
 import { useParams } from "react-router-dom";
 
 export function ProfilePage() {
  const params = useParams()
  return (
    <section>
      <Header/>
      <h1>Página de {params.name}</h1>
    </section>
  );
}

// export default ProfilePage;
