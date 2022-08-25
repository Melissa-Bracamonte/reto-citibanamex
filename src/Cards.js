import '../src/styles/abstracts/cards.scss';
import cardDebito from '../src/img/debito.png';
import cardCredito from '../src/img/credito.png';
import {FaAngleRight} from 'react-icons/fa';
import { Link } from 'react-router-dom'

function Cards() {
    return (
        <div className='cards'>
            <p className='font-p-gray' >Cuentas en efectivo</p>
            <div className='container-cards-debito'>
            <img className="card-img" src={cardDebito} alt="logo"/>
            <div id='text-card-debito'>
                <p className='gray' id="p-size-font">Mi cuenta **789</p>
                <p id="p-size-font">$9,025.00</p>
                </div>
                <Link to="/movimientos">
                    <div><FaAngleRight/></div>
                </Link>
                
            </div>
            <br/>
            <p className='font-p-gray' >Tarjetas de crédito</p>
            <div className='container-cards-credito'>
            <img className="card-img" src={cardCredito} alt="logo"/>
            <div id='text-card-debito'>
            <p className='gray'>Tarjeta platinum **246</p>
                <p id="p-size-font">$9,025.00</p>
            
                
            </div>
            <div><FaAngleRight/></div>
            </div>
        </div>
    )
}

export default Cards;