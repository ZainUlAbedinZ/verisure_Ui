import React from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import Cat from '../../assets/img/Cat.jpg';
import Tijdelijk from '../../assets/img/Tijdelijk.png';

function MidSection() {
	return (
		<>
			{/* First Section  p-2 p-md-5*/}
			<div className='bg-white '>
				<Container className='text-center'>
					<div className='py-4'>
						<h3 className='p-0 m-0 text-dark font-weight-bold pt-3 '>
							{' '}
							Het aantal woninginbraken is met ruim 33% toegenomen
							en zal de komende maanden alleen maar verder
							toenemen!{' '}
						</h3>
						<h3 className='p-2 m-0 font-weight-bold text-orange'>
							{' '}
							Zorg dat jouw huis niet de volgende is!{' '}
						</h3>
					</div>
				</Container>

				{/* Second Section */}
				<Container className='p-md-5'>
					<Row>
						<Col md='6' xs='12' className='p-0 '>
							<div>
								<img src={Cat} alt='cat' className='cat_img' />
							</div>
						</Col>
						<Col md='6' xs='12' className='pt-md-5 p-0'>
							<div className='midSection__card text-white py-5 px-md-5'>
								<h4 className='m-0 text-orange text-center text-md-left fw--500 ml-md-3'>
									Bescherm jouw familie en huis
								</h4>
								<h5 className='text-orange text-center text-md-left  fw--500 ml-md-3'>
									{' '}
									24 uur per dag/365 dagen per jaar{' '}
								</h5>
								<p className='mt-4 font-weight-light fs--18 ml-md-3'>
									{' '}
									Verisure zorgt ervoor dat jouw veiligheid en
									die van jouw dierbaren wordt beschermd. Onze
									huisalarmen hebben een directe verbinding
									met onze meldkamer. Zo garanderen wij iedere
									dag jouw bescherming.{' '}
								</p>
								<p className='font-weight-normal fw--300 ml-md-3'>
									Elke waarschuwing of noodsituatie zal worden
									beantwoord door een van onze operators in
									een gemiddelde tijd van 29 seconden. Onze
									meldkamer staat 24 uur per dag, elke dag van
									het jaar tot je beschikking om de beste
									beveiligingsprotocollen bij elke gelegenheid
									te activeren. Indien nodig sturen wij een
									surveillant, politie, brandweer of ambulance
									naar jouw huis.
								</p>
								<p className='font-weight-normal fw--300 ml-md-3'>
									Verisure is de beste partner om jouw huis te
									beschermen bij een gevaarlijke situatie: als
									een overvaller het huis binnenkomt, als er
									een ongeval binnenshuis plaatsvindt, als een
									familielid dringende gezondheidszorg nodig
									heeft etc. Bescherm jouw familie met de
									veiligste huisbeveiliging.
								</p>
							</div>
						</Col>
					</Row>
				</Container>
				{/* New Container  */}
				<Container className='text-center mt-3 mt-md-0 mb-5'>
					<h2 className='text-orange p-0 m-0 fw--500'>
						{' '}
						Verisure beschermt al meer dan 30 jaar{' '}
					</h2>
					<h5 className='text-center text-dark p-0 m-0'>
						{' '}
						Jouw bescherming is het belangrijkst bij Verisure. Hier
						werken we al meer dan 30 jaar aan. Een gespecialiseerd
						en professioneel team dat wordt vertrouwd door meer dan
						3 miljoen klanten over de hele wereld.{' '}
						<b className='text-orange  fw--700 '>
							Start nu het Verisure Inbraakonderzoek en kom
							erachter of jouw huis goed beveiligd is.
						</b>
					</h5>
					<div className='mx-auto'>
						<Button
							onClick={() => window.scrollTo(0, 0)}
							className='btn  btn-md  btn-danger bg-orange mt-3 px-5 py-3'
						>
							{' '}
							Start direct met het Verisure Inbraakonderzoek{' '}
						</Button>
					</div>
				</Container>
				{/* Picture */}
				<Container>
					<img
						src={Tijdelijk}
						alt='Tijdelijk'
						className='w-100 h-80'
					/>
				</Container>
			</div>
		</>
	);
}

export default MidSection;
