import {React} from "react";
import { useNavigate  } from "react-router-dom";

const Eliminada = () =>{
  const navigate = useNavigate();
  const routeChangeAgregar = () =>{ 
    let path = `/moto/agregar`; 
    navigate(path);
  }

  const routeChangeBuscar = () =>{ 
    let path = `/moto/buscar`; 
    navigate(path);
  }

  return (
    <div>
      <h1>Moto Eliminada</h1><br/>
      <button onClick={routeChangeAgregar}>Agregar otra moto</button><br></br>
      <button onClick={routeChangeBuscar}>Catalogo de Motos</button>
    </div>
  )
}



export default Eliminada;