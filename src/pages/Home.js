
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Carousel from '../components/carousel/carousel';
import img_picnic from '../assets/img_picnic.jpg';
import img_barbecue from '../assets/img_barbecue.jpg';
import img_event from '../assets/img_event.jpg';
import img_relax from '../assets/img_relax.jpg';
import MyCarousel from '../components/carousel/carousel';

function Home() {
    return (
    <>
        <div className="pagewrap">
                     <Header />
     <main>
                   
                  <div className="container">
                    <div className="row mt-5 ">
                      <div className="col-sm-12 col-md-12 col-lg-6">
                        <Carousel />
                      </div>
                            
                            <div className="col-lg-6 mt-5">
                                  <div className="card text-center slide_card" id="info_header">

                                    <div className="card-body">

                                      <p className="card-text text" id="text">
                                        A Canova di Caminata, Alta Val Tidone (PC), alt.600 m. è possibile passare una giornata in campagna
                                        all'aperto in una
                                        situazione piacevole, molto spaziosa e ben attrezzata.

                                        A disposizione di chi vorrà venire, vi sono due ampie sale da pranzo per circa 60 persone, situate al
                                        primo piano di una cascina, dotate di lavandino, piccola cucina e frigorifero.

                                        All'esterno della cascina,vi è una lunga tavolata (12 posti) con barbecue,il parco
                                        giochi per i bimbi
                                        con scivolo, torretta, altalene. Un altro tavolo per 8 persone si trova sotto il vicino
                                        ciliegio.

                                        Tutt'intorno un vasto prato dove giocareo rilassarsi piacevolmente.

                                        Ideale per gruppi e famiglie, anche per festeggiare un evento.</p>

                                    </div>
                                  </div>

                                        <div className="btn_prenota">
                                          <button className="name noselect" id="prenota">PRENOTA!</button>
                                        </div>
                            </div>
                          </div>
                                  
                                  <div className="container mt-5">
                                  <div className="row ">
                                    <div className="col">
                                      <div className="card text-center banner">

                                        <div className="card-body">
                                          <h5 className="card-title">Cosa puoi fare da noi </h5>

                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  </div>


                           
                          <div className="container mt-5">
                          <div className="row ms-2 row-cols-1 row-cols-md-3 g-4 me-2">
                            <div className="col col-sm-6 col-md-6 col-lg-3 ">
                              <div className="card slide_card" id="cardcard">
                                <img src={img_picnic} className="card-img-top" alt="..." />
                                <div className="card-body ">
                                  <h5 className="card-title text-center "><a className="a1" href="#">Pic Nic</a></h5>
                                  <p className="card-text text-center">Abbiamo a disposizione un prato dove potersi rilassare e mangiare
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col col-sm-6 col-md-6 col-lg-3">
                              <div className="card slide_card" id="cardcard">
                                <img src={img_event} className="card-img-top" alt="..." />
                                <div className="card-body">
                                  <h5 className="card-title text-center "><a className="a1" href="#">Eventi</a></h5>
                                  <p className="card-text text-center">Condividi i momenti migliori con i tuoi parenti o amici</p>
                                </div>
                              </div>
                            </div>
                            <div className="col col-sm-6 col-md-6 col-lg-3">
                              <div className="card slide_card" id="cardcard">
                                <img src={img_barbecue} className="card-img-top" alt="..." />
                                <div className="card-body">
                                  <h5 className="card-title text-center "><a className="a1" href="#">Barbecue</a></h5>
                                  <p className="card-text text-center">Grigliate all'aria aperta</p>
                                </div>
                              </div>
                            </div>

                            <div className="col col-sm-6 col-md-6 col-lg-3">
                              <div className="card slide_card" id="cardcard">
                                <img src={img_relax} className="card-img-top" alt="..." />
                                <div className="card-body">
                                  <h5 className="card-title text-center "><a className="a1" href="#">Relax</a></h5>
                                  <p className="card-text text-center">Rilassati da noi</p>
                                </div>
                              </div>
                            </div>
                          </div>
                    </div>
                    </div>

      </main>

        <Footer />

            
    </div>


    
    </>
    );
}
export default Home;