import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import img_picnic from '../assets/img_picnic.jpg';
import "./Servizi.css";
function Servizi(){
    return(
        <>
         <body>
        <div classNameName="pagewrap">
       
                     <Header />
     <main>
      <div className="container mt-5">  
     <div className="card mb-3" >
  <div className="row g-0">
    <div className="col">
      <img src={img_picnic} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body pic_nic">
        <h5 className="card-title text-center">Carimg-fluid d title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
</div>

     </main>
     <Footer />
     
     </div>
    </body>

        
        </>

    );
}
export default Servizi;