import '../src/styles/abstracts/cards.scss';
import cardDebito from '../src/img/debito.png';
import cardCredito from '../src/img/credito.png';
import {FaAngleRight} from 'react-icons/fa';
import { Link } from 'react-router-dom'

function Cards() {
    return (
        <div className='cards'>
            <p1 >Cuentas en efectivo</p1>
            <div className='container-cards-debito'>
            <img className="card-img" src={cardDebito} alt="logo"/>
            <div id='text-card-debito'>
                <p5 className='gray'>Mi cuenta **789</p5><br/>
                <p5>$9,025.00</p5>
                </div>
                <Link to="/Informacion">
                    <div><FaAngleRight/></div>
                </Link>
                
            </div>
            <br/>
            <p1 >Tarjetas de crédito</p1>
            <div className='container-cards-credito'>
            <img className="card-img" src={cardCredito} alt="logo"/>
            <div id='text-card-debito'>
            <p5 className='gray'>Tarjeta platinum **246</p5><br/>
                <p5>$9,025.00</p5>
            
                
            </div>
            <div><FaAngleRight/></div>
            </div>
        </div>
    )
}

export default Cards;