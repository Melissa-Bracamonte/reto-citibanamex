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
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">¡Hola Melissa!</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <h className="nav-link active" aria-current="page" href="#">Home</h>
          </li>
          <li className="nav-item">
            <h className="nav-link" href="#">Link</h>
          </li>
          <li className="nav-item dropdown">
            <h className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </h>
            <ul className="dropdown-menu">
              <li><h className="dropdown-item" href="#">Action</h></li>
              <li><h className="dropdown-item" href="#">Another action</h></li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              <li><h className="dropdown-item" href="#">Something else here</h></li>
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
<div className='container1'>  

<div class="d-flex flex-row" id='container-viewmore'>
  <div class="p-2"><p1>Ofertas para ti</p1></div>
  <div class="p-2"><p2>Ver más</p2><button className='button-add-blue'><IoMdAddCircle/></button></div>
  
  
</div>


<div className='container-subtitle'>
  <p3><strong>Una tarjeta pensada para ti 🤩</strong></p3><br/>
  <p3>Inlcuye recompensas, ¡corre!</p3>
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
