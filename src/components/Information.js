import React from "react";
import "../styles/abstracts/information.scss";
import logociti from "../../src/img/logociti.png";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Information = () => {
  const navigate = useNavigate();

  const redirectSharingWith = () => {
    navigate("/movimientos");
  };

  return (
    <>
      <AiOutlineClose
        className="closeInformation"
        onClick={redirectSharingWith}
      />
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
          <p>1. Compartir tus gastos.</p>
          <p>2. Eligir las personas con quienes compartirás ese gasto</p>
          <p>
            3. Dividir la cuenta entre el número de personas que has elegido.
          </p>
          <p>4. Obtener un código QR para facilitar la transacción.</p>
        </div>
      </div>
    </>
  );
};

export default Information;
