import QRCode from "react-qr-code";
import "../styles/abstracts/codi.scss";
import logociti from "../../src/img/logociti.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

function Codi() {
  const { state } = useLocation();
  const stringCode="https://citibanamex-app.vercel.app//codeqr?monto="+encodeURIComponent(state.totalDivision)+"&&concepto="+encodeURIComponent(state.expenseName);
  return (
    <section className="containerCodi d-flex flex-column">
      <div className="p-2">
        <div className="titleCodi d-flex flex-column">
          <img className="logocitibanamex" src={logociti} alt="logociti" />
          <p className="subtitle">¡Código listo!</p>
          <p className="">
            Comparte este código con la persona que te enviará el dinero
          </p>
          <div className="containerCode">
            <QRCode className="code" value={stringCode}></QRCode>
          </div>
        </div>
      </div>
      <div className="p-2">
        <table className="table">
          <tbody>
            <tr>
              <th scope="row" className="table-left">
                Cuenta para recibir dinero
              </th>
              <td className="table-right">Melissa</td>
            </tr>
            <tr>
              <th scope="row" className="table-left">
                Monto
              </th>
              <td className="table-right">${state.totalDivision}</td>
            </tr>
            <tr>
              <th scope="row" className="table-left">
                Concepto
              </th>
              <td className="table-right">{state.expenseName}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Link to="/">
        <button className="btn-dg p-2">
          <p className="txt-btn">Cerrar</p>
        </button>
      </Link>
    </section>
  );
}

export default Codi;
