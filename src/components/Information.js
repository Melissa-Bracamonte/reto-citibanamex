import React from "react";
import "../styles/abstracts/information.scss";
import logociti from "../../src/img/logociti.png";
import flecha1 from "../../src/img/flecha1.png";
import { useNavigate } from "react-router-dom";

const Information = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className="narrow1">
          <img className="narrow1" src={flecha1} alt="narrow1" onClick={() => navigate('/movimientos')} />
      </div>
      <div className="container">
        <div className="headerContainer">
          <img className="logociti" src={logociti} alt="logociti" />
        </div>
        <h1>¡ Comparte tus gastos con quien quieras y bájale al estrés !</h1>
        <div className="pContainer">
          <p>
            En Citibanamex pensamos en ti, ya no tendrás que preocuparte por
            sacar las cuentas, ¡nosotros lo hacemos por ti!
          </p>
          <p>Con esta nueva alternativa podrás:</p>
          <p>1. Seleccionar el gasto que quieres compartir.</p>
          <p>2. Elige las personas con quienes lo vas a compartir</p>
          <p>3. Conoce el monto que cada uno deberá pagar.</p>
        </div>
      </div>
    </>
  );
};

export default Information;
