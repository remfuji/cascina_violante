import img_picnic from '../../assets/img_picnic.jpg';
import img_barbecue from '../../assets/img_barbecue.jpg';
import img_event from '../../assets/img_event.jpg';
import img_relax from '../../assets/img_relax.jpg';
import { HashLink } from 'react-router-hash-link';

function Card(){
    return(
        <>
            <div className="container mt-5">
                          <div className="row ms-2 row-cols-1 row-cols-md-3 g-4 me-2">
                            <div className="col col-sm-6 col-md-6 col-lg-3 ">
                              <div className="card slide_card" id="cardcard">
                                <img src={img_picnic} className="card-img-top" alt="..." />
                                <div className="card-body ">
                                  <h5 className="card-title text-center "><HashLink className='a1' to="/Servizi/#pic-nic">pic-nic</HashLink></h5>
                                  <p className="card-text text-center">Abbiamo a disposizione un prato dove potersi rilassare e mangiare
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col col-sm-6 col-md-6 col-lg-3">
                              <div className="card slide_card" id="cardcard">
                                <img src={img_event} className="card-img-top" alt="..." />
                                <div className="card-body">
                                  <h5 className="card-title text-center "><HashLink className='a1' to="/#eventi">eventi</HashLink></h5>
                                  <p className="card-text text-center">Condividi i momenti migliori con i tuoi parenti o amici</p>
                                </div>
                              </div>
                            </div>
                            <div className="col col-sm-6 col-md-6 col-lg-3">
                              <div className="card slide_card" id="cardcard">
                                <img src={img_barbecue} className="card-img-top" alt="..." />
                                <div className="card-body">
                                <h5 className="card-title text-center "><HashLink className='a1' to="/Servizi/#barbecue">barbecue</HashLink></h5>
                                  <p className="card-text text-center">Grigliate all'aria aperta</p>
                                 </div>
                              </div>
                            </div>

                            <div className="col col-sm-6 col-md-6 col-lg-3">
                              <div className="card slide_card" id="cardcard">
                                <img src={img_relax} className="card-img-top" alt="..." />
                                <div className="card-body">
                                  <h5 className="card-title text-center "><HashLink className='a1' to="/#relax">Relax</HashLink></h5>
                                  <p className="card-text text-center">Rilassati da noi</p>
                                </div>
                              </div>
                            </div>
                          </div>
                    </div>
                    
        </>
    );
}
export default Card;