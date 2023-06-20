import logo from '../../assets/logo.png';
import './Footer.css';



function Footer(){
    return (
        <>
            <div className="container-fluid">
           <footer className=" footer">

            <div className="row ms-2 row-cols-1 row-cols-md-3  mt-5 me-2 cont_footer">
              <div className="col link_footer col-sm-6 col-md-6 col-lg-4">

                <ul>
                  <li>
                    <a rel="noopener"  aria-label="Primary" title="airbnb" href="https://www.airbnb.it/rooms/17917859" target="_blank"><i className="fa-brands fa-airbnb"></i></a>
                  </li>
                  <li>
                    <a rel="noopener"  aria-label="Primary" href="#" target="_blank"><i
                        className="fab fa-instagram"></i></a>
                  </li>
                  <li>
                    <a  rel="noopener"  aria-label="Primary" href="#" target="_blank"><i className="fab fa-facebook-square"></i></a>
                  </li>
                </ul>
              </div>


              <div className="col logo_footer col-sm-6 col-md-6 col-lg-4">


                <img alt="logo cascina violante"src={logo} className=" img_footer" />


              </div>
              <div className="col info_footer  col-md-12 col-lg-4">
                  <ul>
                    <li>
                      <a href="#" target="_blank">contattaci</a>
                    </li>
                    <li>
                      <a href="#" target="_blank">dove siamo</a>
                    </li>
                    <li>
                      <a href="#" target="_blank">chi siamo</a>
                    </li>
                  </ul>

              </div>

            </div>
           </footer>
        </div>
        </>
    );
}
export default Footer;