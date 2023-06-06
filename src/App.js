import {React, useEffect} from "react";
import NewMoto from './components/nuevaMoto';
import Actualizando from "./components/actualizaMoto";
import Buscando from './components/buscarMoto';
import Realizado from "./components/guardadaOk";
import Eliminada from "./components/eliminadaOk";
import {BrowserRouter, Routes, Route, Link, useNavigate, Navigate, useParams, json} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from "./store";
import ActualizarOk from "./components/actualizadaOk";



let Error404 = () =>{
  return(
    <>
      <h1>Esta pagina no existe - 404</h1>
      <Link to="/moto/agregar">Regresar al home</Link>
    </>
  )
}

let NotImplemented = () =>{
  return (
    <div>
      <h1>Esta pagina no esta lista</h1>
      <Link to="/">Ir al inicio</Link>
    </div>
    )
}

let Principal = () =>{
  return <h1>Probando Principal</h1>
}



function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/"/>
          <Route path="moto">
            <Route path="buscar" element={<Buscando/>} />
            <Route path="agregar" element={ <NewMoto/> }/>
            <Route path="actualizar/:id" element={<Actualizando/>}/>           
            <Route path="eliminar" element={<NotImplemented/>} />
            <Route path="guardadaOK" element={<Realizado/>} />
            <Route path="eliminadaOk" element={<Eliminada/>} />
            <Route path="actualizadaOk" element={<ActualizarOk/>} />
          </Route>
          
          <Route path="*" element={<Error404/>} />

        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
