
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
function Contatti(){
    return (
    <>
    <div className="pagewrap">
		<Header />
		<main>
			<div className="container mt-5">
				<div className="row ">
					<div className="col-sm-12 col-md-12 col-lg-6">
				<div id="border-form" className="container contact-form">
					<h2 id="form_h2">Scrivici</h2>
					<p>ti risponderemo nel minor tempo possibile!</p>
					<form id="form" method="post">
				
				
						<div className="form_div">
							<div className="form-group">
								<input type="text" name="txtName" className="form-control border-input" placeholder="Nome *"
									value="" />
							</div>
							<div className="form-group">
								<input type="text" name="txtEmail" className="form-control border-input" placeholder="Email *"
									value="" />
							</div>
							<div className="form-group">
								<input type="text" name="txtPhone" className="form-control border-input" placeholder="Cellulare*"
									value="" />
							</div>
							<div className="form-group">
								<textarea name="txtMsg" className="form-control border-input" placeholder="il tuo Messaggio *"></textarea>
							</div>
							<div className="form-group" id="btn_form">
								<input type="submit" name="btnSubmit" className="btnContact" value="Invia" />
							</div>
				
						</div>
				
					</form>
				
				</div>
						</div>
					<div className="col-md-12 col-lg-6 ">
						
							<div className="google_map">
								<iframe title="frame"
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22600.975817531507!2d9.27929126153413!3d44.92085493634587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4780cabb47a80693%3A0xd860b340b2b09da4!2sCasa%20vacanze%20colline%20Oltrepo&#39;!5e0!3m2!1sit!2sit!4v1684230183723!5m2!1sit!2sit" allowfullscreen="" loading="lazy"
									referrerpolicy="no-referrer-when-downgrade"></iframe>
							</div>
						






						
					</div>
				</div>
			</div>	

			<div className="container mt-5">
				<div className="row ">
					<div className="col">
						<div className="card text-center banner contatti_banner">
			
							<div className="card-body">
								<h5 className="card-title">I nostri contatti</h5>
								<ul>
									<li>
										<i className="fa-solid fa-house"></i> <br />Via Canova 1- Cà Nova di Caminata (PC) Strada Provinciale 160, Via Canova 1- Cà Nova, 29010 Torre Gandini
										PC
									</li>
									<li>
										<i className="fa-solid fa-phone-volume"></i><br /> +39 3345996954
									</li>
									<li>
										<i className="fa-solid fa-at"></i><br /> cascina.violante@gmail.com
									</li>
								</ul>
			
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
export default Contatti;