import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Header.css';


function Header(){
    return(
        <>
        <header className="container-fluid mt-1 ms-2 me-2">

                       
                        <section className="top-nav">
                         <div className="logo-image">
                            <Link to='/' id='a'><img  alt="logo cascina violante" src={logo} className="img-fluid" /></Link>
                          </div>
                            <input aria-label="form" id="menu-toggle" type="checkbox" />
                            <label className='menu-button-container' htmlFor="menu-toggle">
                              <div className='menu-button'></div>
                            </label>
                            <ul className="menu">
                              <li><a className="a2" href="#">Chi Siamo</a></li>
                              <li><Link to="/servizi" className='a2'>Servizi</Link></li>
                              <li><a className="a2" href="#">Dintorni</a></li>
                              <li><Link to="/contatti" className='a2'>Contatti</Link></li>

                            </ul>
                        </section>
                      </header>
        </>
    );
}
export default Header;