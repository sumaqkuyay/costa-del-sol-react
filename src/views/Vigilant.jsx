import React from 'react';
import VigilantButton from '../components/VigilantButton';
// import { Link } from 'react-router-dom';

const Vigilant = ()=>{
  return(
    <div>
       <div className="vigilant-subnavbar">
        {/* <Link to="/partners">
            <i class='bx bxs-chevron-right'></i>
            <span> Socios</span>
          </Link>
        <i class='bx bxs-chevron-right'></i>
        <span>Solicitudes de Socios</span> */}
       </div>
       <div className="section-btnVigilant">
        <VigilantButton classbtn="btn btn-welcome" name="Ingreso" reference="/ingreso" />
        <VigilantButton classbtn="btn btn-welcome" name="Salida" reference="/salida" />
      </div>
    </div>

  );
};
export default Vigilant;
