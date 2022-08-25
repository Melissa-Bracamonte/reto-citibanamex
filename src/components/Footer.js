import '../styles/abstracts/cards.scss';
import { IoMdHelpCircle } from 'react-icons/io';
import { FaDollarSign } from 'react-icons/fa';
import { BsGraphUp } from 'react-icons/bs';

function Footer() {
  return (
    <div className='card-footer d-flex fixed-bottom'>
      <div className="d-flex flex-row" id="space-footer">
        <div className="p-2">
          <button className="button-footer">
            <IoMdHelpCircle />
            <br />
            Ayuda
          </button>
        </div>
        <div className="p-2">
          <button className="button-footer">
            <FaDollarSign />
            <br />
            Transacciones
          </button>
        </div>
        <div className="p-2">
          <button className="button-footer">
            <BsGraphUp />
            <br />
            Invertir
          </button>
        </div>
      </div>
    </div>
  );
}
export default Footer;
