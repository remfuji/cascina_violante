
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import img1 from '../assets/Cascina, sala pranzo con salottino(2).jpg';
import img2 from '../assets/Cascina, tavolata esterna(1).jpg';
import img3 from '../assets/Cascina, vista campo giochi.jpg';
import img4 from '../assets/Cascina, vista.jpg';
import img5 from '../assets/cascina, esterno (1).jpg';
import img_picnic from '../assets/img_picnic.jpg';
import img_barbecue from '../assets/img_barbecue.jpg';
import img_event from '../assets/img_event.jpg';
import img_relax from '../assets/img_relax.jpg';

function Home() {
    return (
    <>
        <div className="pagewrap">
                     <Header />
     <main>
                   
                  <div className="container">
                    <div className="row mt-5 ">
                      <div className="col-sm-12 col-md-12 col-lg-6">
                        <div id="carouselExample" className="carousel slide">
                          <div className="carousel-inner carousel_radious">
                            <div className="carousel-item active cont_carousel">
                              <img src={img1} className="d-block w-100 rounded img_carousel" alt="..." />

                            </div>
                            <div className="carousel-item cont_carousel">
                              <img src={img2} className="d-block w-100 rounded img_carousel" alt="..." />
                            </div>
                            <div className="carousel-item cont_carousel">
                              <img src={img3} className="d-block w-100 rounded img_carousel" alt="..." />
                            </div>
                            <div className="carousel-item cont_carousel">
                              <img src={img4} className="d-block w-100 rounded img_carousel" alt="..." />
                            </div>
                            <div className="carousel-item cont_carousel">
                              <img src={img5} className="d-block w-100 rounded img_carousel" alt="..." />
                            </div>
                          </div>
                          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                          </button>
                          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                          </button>
                        </div>
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