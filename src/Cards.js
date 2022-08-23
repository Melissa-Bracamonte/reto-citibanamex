import '../src/styles/abstracts/cards.scss';
import cardDebito from '../src/img/debito.png';
import cardCredito from '../src/img/credito.png';
function Cards() {
    return (
        <div>
            <h1 >Cuentas en efectivo</h1>
            <div className='container-cards'>
            <img className="card-img" src={cardDebito} alt="logo"/>
            <div id='text-card-debito'>
                <p className='gray'>Mi cuenta **789</p>
                <p>$9,025.00</p>
                </div>
                
            </div>
            <h2 >Tarjetas de crédito</h2>
            <div className='container-cards'>
            <img className="card-img" src={cardCredito} alt="logo"/>
            <div id='text-card-debito'>
            <p className='gray'>Tarjeta platinum **246</p>
                <p>$9,025.00</p>
            </div>
                
            </div>
        </div>
    )
}

export default Cards
