import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useDispatch} from "react-redux";
import './table.css';

import { Moto } from '../store/moto';

const NewMoto = () => {
  let dispatch = useDispatch();

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

    const onSubmit = (data) =>{
      dispatch(
          Moto({
          data:data,
          method:"POST"
        })
      );
      navigate('/moto/guardadaOk');
    }
    return (
      
        <div className='form-center'>
          <form method='post' onSubmit={handleSubmit(onSubmit)}>
              <h1 align="left">Agregar Moto</h1>
              <label htmlFor="moto">Moto</label><br/>
              <input type="text" name="moto"{...register('moto')}/><br/>
              <label htmlFor="placa">Placa</label><br/>
              <input type="text" name="placa"{...register('placa')}/><br/>
              <label htmlFor="marca">Marca</label><br/>
              <input type="text" name="marca"{...register('marca')}/><br/><br/>
              <label htmlFor="modelanio">Modelo</label><br/>
              <input type="text" name="modelanio"{...register('modelanio')}/><br/><br/>
              <button type="submit">Guardar Moto</button>
          </form>
        </div>
      
  );
}


export default NewMoto;