import { Header } from "../Compenents/Header";
import { useParams } from "react-router-dom";


export function ProductPage() {
    const params = useParams()
  return (
    <section>
      <Header/>
      <h1>Página de produtos {params.id}</h1>
    </section>
  );
}