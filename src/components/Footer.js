import {IoMdHelpCircle} from 'react-icons/io';
import {FaDollarSign} from 'react-icons/fa';
import {MdGroups} from 'react-icons/md';
import {BsGraphUp} from 'react-icons/bs';

function Footer(){
    return(
        <div>
            <button><IoMdHelpCircle/>Ayuda</button>
            <button><FaDollarSign/>Transacciones</button>
            <button><BsGraphUp/>Invertir</button>
            <button><MdGroups/>Comparte tus gastos</button>
        </div>
    )
}
export default Footer;