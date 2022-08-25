import "../styles/abstracts/cards.scss";
import { IoMdHelpCircle } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="card-footer fixed-bottom">
      <div className="d-flex flex-row">
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
        <div className="p-2">
          <Link to="/categoria">
            <button className="button-footer">
              <MdGroups />
              <br />
              Comparte tus gastos
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Footer;
