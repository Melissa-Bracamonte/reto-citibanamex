import QRCode from "react-qr-code";
import '../styles/abstracts/codi.scss';
import logociti from "../../src/img/logociti.png";
import { Link } from 'react-router-dom';

function Codi() {

  return (
    <section className="containerCodi d-flex flex-column">
        
        <div className="p-2">
        
            <div className="titleCodi d-flex flex-column">
            <img className="logocitibanamex" src={logociti} alt="logociti" />
        <p className="subtitle">¡Código listo!</p>
        <p className="">Comparte este código con la persona que te enviará el dinero</p>
      
        <QRCode value="400" size={200} bgColor="#282c34" fgColor="#fff" level="H" className="p-2">
        </QRCode>
        </div>
      </div>
      <div className="p-2">
      
      <table className="table">
   <tbody>
    <tr>
      <th scope="row" className="table-left">Cuenta para recibir dinero</th>
      <td className="table-right">Mark</td>
    </tr>
    <tr>
      <th scope="row" className="table-left">Monto</th>
      <td className="table-right">$400</td>
    </tr>
    <tr>
      <th scope="row" className="table-left">Concepto</th>
      <td className="table-right">E comerce Chili's</td>
    </tr>
    
  </tbody>
</table>
      
      
      </div>
      <Link to="/">
      <button className='btn-dg p-2'><p className="txt-btn">Cerrar</p></button>
                </Link>
   
      
    </section>
  );
}

export default Codi;


