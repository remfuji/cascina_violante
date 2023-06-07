import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Header.css';


function Header(){
    return(
        <>
        <header className="container">

                       
                        <section className="top-nav">
                         <div className="logo-image">
                            <Link to='/' id='a'><img  alt="logo cascina violante" src={logo} className="img-fluid" /></Link>
                          </div>
                            <input aria-label="form" id="menu-toggle" type="checkbox" />
                            <label className='menu-button-container' for="menu-toggle">
                              <div className='menu-button'></div>
                            </label>
                            <ul className="menu">
                              <li><a className="a2" href="#">Chi Siamo</a></li>
                              <li><a className="a2" href="servizi.html">Servizi</a></li>
                              <li><a className="a2" href="#">Dintorni</a></li>
                              <li><Link to="/contatti" className='a2'>Contatti</Link></li>

                            </ul>
                        </section>
                      </header>
        </>
    );
}
export default Header;