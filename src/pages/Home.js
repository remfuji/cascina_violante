
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Carousel from '../components/carousel/Carousel';
import Card from '../components/card/Card';



function Home() {
    return (
    <>
        <div className="pagewrap">
                     <Header />
     <main>
                   
                  <div className="container">
                    <div className="row mt-5 ">
                        <div className="col-sm-12 col-md-12 col-lg-6 ">
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
                            <Card />

                      </div>     
                          

      </main>

        <Footer />

            
    </div>


    
    </>
    );
}
export default Home;