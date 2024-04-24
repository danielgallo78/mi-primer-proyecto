import React from 'react';
import '../stylesheets/Testimonio.css';

function Testimonio (props){
   return (
      <div className='contenedor-testimonio'>
         <img className='imagen-testimonio'
         src={require(`../imagenes/auto-${props.imagen}.jpg`)} alt='auto carrera' />
         <div className='contenedor-texto-testimonio'>
            <p className='nombre-auto'><strong>{props.marca}</strong></p>
            <p className='estilo-auto'>{props.estilo}</p>
            <p className='descripcion'>"{props.descripcion}"</p>

         </div>

      </div>
   );
}

export default Testimonio;


