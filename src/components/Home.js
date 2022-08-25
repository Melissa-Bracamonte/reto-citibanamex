import Cards from '../Cards.js';
import Footer from './Footer.js';
import {IoMdAddCircle} from 'react-icons/io';
import '../styles/abstracts/cards.scss';


function Home() {
  return (
    <div className="d-flex" id='ad'>
      <nav className="navbar fixed-top">
  <div className="container-fluid">
    <p className="navbar-brand">¡Hola Melissa!</p>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <p className="offcanvas-title" id="offcanvasNavbarLabel">¡Hola Melissa!</p>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <p className="nav-link active" aria-current="page" href="#">Home</p>
          </li>
          <li className="nav-item">
            <p className="nav-link" href="#">Link</p>
          </li>
          <li className="nav-item dropdown">
            <p className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </p>
            <ul className="dropdown-menu">
              <li><p className="dropdown-item" href="#">Action</p></li>
              <li><p className="dropdown-item" href="#">Another action</p></li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              <li><p className="dropdown-item" href="#">Something else here</p></li>
            </ul>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
<div className='container1' >  

<div id='container-viewmore'>
  <div className="viewmore-start"><p className='font-p-gray' id="p-size-font">Ofertas para ti</p></div>
  <div className="viewmore-end"><p className='font-p-gray' id="p-size-font-ten">Ver más <button className='button-add-blue'><IoMdAddCircle/></button></p></div>
  </div>


<div className='container-subtitle'>
  <p className='font-p-gray' id="p-size-font"><strong>Una tarjeta pensada para ti 🤩</strong></p>
  <p className='font-p-gray' id="p-size-font">Inlcuye recompensas, ¡corre!</p>
</div>
<br/>
<Cards/>
<br/>

    </div>
    <footer><Footer/></footer>
    
    </div>
    
    
  );
}

export default Home;
