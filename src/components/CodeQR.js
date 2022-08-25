import { useSearchParams } from "react-router-dom";
import '../styles/abstracts/codi.scss';
import logociti from "../../src/img/logociti.png";
import sendmoney from '../img/enviardinero.png';



function CodeQR(){
const [searchParams, setSearchParams] = useSearchParams();
const monto = searchParams.get("monto");
const concepto = searchParams.get("concepto");

return(
<section className="containerQr d-flex flex-column">
        
        <div className="p-2">
        
            <div className="titleCodi d-flex flex-column">
            <img className="logocitibanamex" src={logociti} alt="logociti" /><br/>
        <p className="subtitle">Enviar dinero a ¡Melissa!</p><br/>
      
       
        </div>
      </div>
      <div className="p-2">
      

<table className="table" >
   <tbody>
    <tr>
      <th scope="row" className="table-left">Monto</th>
      <td className="table-right">${monto}</td>
    </tr>
    <tr>
      <th scope="row" className="table-left">Concepto</th>
      <td className="table-right">{concepto}</td>
    </tr>
    
  </tbody>
</table><br/>

      
      
      </div>
      <div className="p-2" id="containerSend">
      <img className="sendmoney" src={sendmoney} alt="" />
      </div>
   
      
    </section>
  );
}




export default CodeQR;
