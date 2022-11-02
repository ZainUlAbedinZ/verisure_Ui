import React, { useState } from 'react';
import {
	Container,
	Row,
	Col,
	Form,
	Button,
	FormGroup,
	Label,
	Input,
} from 'reactstrap';
import MotherSonPic from '../../assets/img/motherSonPic.jpg';
import GratisVideoDeurbel from '../../assets/img/GratisVideoDeurbel.png';
import ThiefTorch from '../../assets/img/thief_lookingFromOutSide.jpg';
import ThiefWithTorchFront from '../../assets/img/thiefWithTorchFrontSide.jpg';
import FormCard from './FormCard';

import { HmacSHA384 } from 'crypto-js';
import thiefWindow from '../../assets/img/thief_window.jpg';
import thiefHitting from '../../assets/img/thiefHitting.jpg';
import thiefOutSide from '../../assets/img/thiefOutSide.png';

function MainContainer() {
	const [active, setActive] = useState(1);

	// NextCard
	const NextCard = e => {
		e.preventDefault();
		setActive(active + 1);
	};
	// If active == 1 then it will render to next card

	// console.log(active, 'active');
	return (
		<>
			<Container>
				<Row>
					<Col md='7' className='bg-orange mt-md-4'>
						<Form className='justify-content-end'>
							<FormGroup className='align-self-center'>
								{active === 11 ? (
									''
								) : (
									<>
										<h3 className='pt-md-4 pl-md-4  m-0 text-white veri_Inbraakonderzoek_Paragraph fw--700'>
											Verisure Inbraakonderzoek
										</h3>
										<p className='p-0 m-0 px-md-3 text-white pb-3 pb-md-5 veri_Inbraakonderzoek_Paragraph  fw--700'>
											Beantwoord enkele vragen over jouw
											kennis. Klik hieronder op het
											antwoord wat jij denkt dat juist is
											of wat van toepassing is op jouw
											woning.
										</p>
									</>
								)}

								<div className='container bg-light'>
									<h5 className='p-2 text-dark veri_Inbraakonderzoek_Paragraph fw--600'>
										{active === 1 ? (
											<p className='text-dark forse-Toename_Pargraph fw--400'>
												1. Hoeveel woninginbraken zijn
												er gemiddeld per jaar in
												Nederland?
											</p>
										) : active === 2 ? (
											<p className='text-dark forse-Toename_Pargraph fw-400'>
												2. In welke provincie zijn de
												meeste woninginbraken per jaar
												volgens het meest recente
												onderzoek?{' '}
											</p>
										) : active === 3 ? (
											<p className='text-dark forse-Toename_Pargraph fw-400'>
												2. In welke provincie zijn de
												meeste woninginbraken per jaar
												volgens het meest recente
												onderzoek?{' '}
											</p>
										) : active === 4 ? (
											<p className='text-dark forse-Toename_Pargraph fw-400'>
												2. In welke provincie zijn de
												meeste woninginbraken per jaar
												volgens het meest recente
												onderzoek?{' '}
											</p>
										) : active === 5 ? (
											<p className='text-dark forse-Toename_Pargraph fw-400'>
												3. Hoeveel % van de woningen in
												Nederland is voorzien van een
												alarmsysteem?{' '}
											</p>
										) : active === 6 ? (
											<p className='text-dark forse-Toename_Pargraph fw-400'>
												3. Hoeveel % van de woningen in
												Nederland is voorzien van een
												alarmsysteem?
											</p>
										) : active === 7 ? (
											<p className='text-dark forse-Toename_Pargraph fw-400'>
												4. Waar staat uw woning?
											</p>
										) : active === 8 ? (
											<p className='text-dark forse-Toename_Pargraph fw-400'>
												4. Waar staat uw woning?
											</p>
										) : active === 9 ? (
											<p className='text-dark forse-Toename_Pargraph fw-400'>
												5. Zijn uw waardevolle spullen
												zichtbaar van buiten?
											</p>
										) : active === 10 ? (
											<p className='text-dark forse-Toename_Pargraph fw-400'>
												5. Zijn uw waardevolle spullen
												zichtbaar van buiten?
											</p>
										) : (
											<FormCard />
										)}
									</h5>
								</div>
							</FormGroup>
							<Container className='align-items-end align-self-end heading-container'>
								<Row className='justify-content-left ml-md-3  mb-3 mb-md-4 heading-container_row'>
									<div
										className={
											active === 1 ||
											active === 3 ||
											active === 5 ||
											active === 7 ||
											active === 9
												? 'cirkel fw--700'
												: 'fw--700'
										}
										onClick={e => NextCard(e)}
									>
										{active === 1 ? (
											'A'
										) : active === 2 ? (
											''
										) : active === 3 ? (
											'A'
										) : active === 4 ? (
											''
										) : active === 5 ? (
											'A'
										) : active === 6 ? (
											<p className='text-dark'>
												Correcte antwood
											</p>
										) : active === 7 ? (
											'A'
										) : active === 8 ? (
											''
										) : active === 9 ? (
											'A'
										) : active === 10 ? (
											''
										) : (
											''
										)}
									</div>
									<p
										className='p-0 m-0 mt-1 text-left veri_Inbraakonderzoek_Paragraph fw--700'
										onClick={e => NextCard(e)}
									>
										{/* 25.0000 inbraken per jaar */}
										{active === 1 ? (
											'25.0000 inbraken per jaar'
										) : active === 2 ? (
											<p className='text-dark'>
												Correcte antwoord:
											</p>
										) : active === 3 ? (
											'Noord-Holland'
										) : active === 4 ? (
											''
										) : active == 5 ? (
											'5 tot 10 procent'
										) : active === 6 ? (
											''
										) : active === 7 ? (
											'In het centrum'
										) : active === 8 ? (
											''
										) : active === 9 ? (
											'Ja, deze zijn zichtbaar'
										) : active === 10 ? (
											''
										) : (
											''
										)}
									</p>
								</Row>
								<Row className='justify-content-left ml-md-3  mb-3 mb-md-4 heading-container_row'>
									<div
										className={
											active === 1 ||
											active === 2 ||
											active === 3 ||
											active === 5 ||
											active === 6 ||
											active === 7 ||
											active === 3 ||
											active === 9
												? 'cirkel fw--700'
												: 'fw--700'
										}
										onClick={e => NextCard(e)}
									>
										{active === 1 ? (
											'B'
										) : active === 2 ? (
											'B'
										) : active === 3 ? (
											'B'
										) : active === 4 ? (
											<p className='text-dark'>
												Correcte antwoord:
											</p>
										) : active === 5 ? (
											'B'
										) : active === 6 ? (
											'B'
										) : active === 7 ? (
											'B'
										) : active === 8 ? (
											''
										) : active === 9 ? (
											'B'
										) : active === 10 ? (
											''
										) : (
											''
										)}
									</div>
									<p
										className='p-0 m-0 mt-1 text-left veri_Inbraakonderzoek_Paragraph fw--700'
										onClick={e => NextCard(e)}
									>
										{active === 1 ? (
											'65.0000 inbraken per jaar'
										) : active === 2 ? (
											'65.0000 inbraken per jaar'
										) : active === 3 ? (
											'Utrecht'
										) : active === 4 ? (
											''
										) : active === 5 ? (
											'10 tot 15 procent'
										) : active === 6 ? (
											'5 tot 10 procent'
										) : active === 7 ? (
											'In een woonwijk'
										) : active === 8 ? (
											<p className='ml-md-5 veri_Inbraakonderzoek_Paragraph fw--700'>
												Bedankt voor je antwoord.
											</p>
										) : active === 9 ? (
											'Deze zijn deels zichtbaar'
										) : active === 10 ? (
											<p className='text-center mr-md-5 veri_Inbraakonderzoek_Paragraph '>
												Bedankt voor je gegeven
												antwoorden. Laat Verisure je
												vrijblijvend informeren en
												ontvang vandaag een GRATIS
												VIDEODEURBEL EN 40% KORTING OP
												DE INSTALLATIE- EN
												AANSCHAFKOSTEN als dank voor je
												deelname aan het Verisure
												Inbraakonderzoek.
											</p>
										) : (
											''
										)}
									</p>
								</Row>
								<Row className='justify-content-left ml-md-3 mb-3 mb-md-4 heading-container_row'>
									<div
										className={
											active === 1 ||
											active === 3 ||
											active === 4 ||
											active === 5 ||
											active === 7 ||
											active === 9
												? 'cirkel  fw--700'
												: 'fw--700'
										}
										onClick={e => NextCard(e)}
									>
										{active === 1
											? 'C'
											: active === 2
											? ''
											: active === 3
											? 'C'
											: active === 4
											? 'C'
											: active === 5
											? 'C'
											: active === 6
											? ''
											: active === 7
											? 'C'
											: active === 8
											? ''
											: active === 9
											? 'C'
											: active === 10
											? ''
											: ''}
									</div>
									<p
										className='p-0 m-0 mt-1 text-left veri_Inbraakonderzoek_Paragraph fw--700'
										onClick={e => NextCard(e)}
									>
										{/* 115.000 inbraken per jaar */}
										{active === 1 ? (
											'115.000 inbraken per jaar'
										) : active === 2 ? (
											<div className='w-100 text-center justify-content-center mx-auto'>
												<button className='btn btn-md p-3 bg-white text-dark'>
													<span className='forse-Toename_Pargraph'>
														{' '}
														Volgende vraag {
															'>>'
														}{' '}
													</span>
												</button>
											</div>
										) : active === 3 ? (
											'Zuid-Holland'
										) : active === 4 ? (
											'Zuid-Holland'
										) : active === 5 ? (
											'15 tot 20 procent'
										) : active === 6 ? (
											<div className='w-100  text-center justify-content-center'>
												<button className='btn btn-md p-3 bg-white text-dark mx-auto'>
													<span className='forse-Toename_Pargraph'>
														Volgende vraag {'>>'}
													</span>
												</button>
											</div>
										) : active === 7 ? (
											'In enn landelijke omgeving'
										) : active === 8 ? (
											<button className='btn btn-md p-3 bg-white text-dark forse-Toename_Pargraph ml-md-5'>
												Volgende vraag {'>>'}
											</button>
										) : active === 9 ? (
											'Nee, deze zijn niet zichtbaar'
										) : active === 10 ? (
											<button className='btn btn-md p-3 bg-white text-dark ml-md-5'>
												<span className='forse-Toename_Pargraph'>
													Laat je gegevens achter{' '}
													{'>>'}
												</span>
											</button>
										) : (
											''
										)}
									</p>
								</Row>
								{active === 3 || active === 5 ? (
									<>
										<Row className='justify-content-left ml-md-3 mb-3 mb-md-4 heading-container_row'>
											<div
												className='cirkel  fw--700'
												onClick={e => NextCard(e)}
											>
												D
											</div>
											<p
												className='p-0 m-0 mt-1 text-left veri_Inbraakonderzoek_Paragraph fw--700'
												onClick={e => NextCard(e)}
											>
												{active === 3
													? 'Noord-Brabant'
													: active === 5
													? '20 tot 25 procent'
													: ''}
											</p>
										</Row>
									</>
								) : (
									''
								)}
							</Container>
						</Form>
					</Col>
					<Col
						md='5'
						className={active === 11 ? 'col-reverse' : 'col'}
					>
						<div className='formImg'>
							{active === 1 ? (
								<img
									src={MotherSonPic}
									alt='mother_son'
									width='90%'
									className={'rounded formImg__first'}
								/>
							) : active === 3 ? (
								<img
									src={thiefWindow}
									alt='thief_window'
									width='90%'
									className={'rounded formImg__first'}
								/>
							) : active === 4 ? (
								<img
									src={thiefWindow}
									alt='thief_window'
									width='90%'
									className={'rounded formImg__first'}
								/>
							) : active === 5 ? (
								<img
									src={thiefHitting}
									alt='thiefHitting'
									width='90%'
									className={'rounded formImg__first'}
								/>
							) : active === 6 ? (
								<img
									src={thiefHitting}
									alt='thiefHitting'
									width='90%'
									className={'rounded formImg__first'}
								/>
							) : active === 7 ? (
								<img
									src={ThiefTorch}
									alt='ThiefTorch'
									width='90%'
									className={'rounded formImg__first'}
								/>
							) : active === 8 ? (
								<img
									src={ThiefTorch}
									alt='ThiefTorch'
									width='90%'
									className={'rounded formImg__first'}
								/>
							) : active === 9 ? (
								<img
									src={ThiefWithTorchFront}
									alt='ThiefWithTorchFront'
									width='90%'
									className={'rounded formImg__first'}
								/>
							) : active === 10 ? (
								<img
									src={ThiefWithTorchFront}
									alt='ThiefWithTorchFront'
									width='90%'
									className={'rounded formImg__first'}
								/>
							) : active === 11 ? (
								<img
									src={thiefOutSide}
									alt='thiefOutSide'
									width='90%'
									className={'rounded formImg__first'}
								/>
							) : (
								<img
									src={MotherSonPic}
									alt='mother_son'
									width='90%'
									className={'rounded formImg__first'}
								/>
							)}
							<img
								src={GratisVideoDeurbel}
								alt='GratisVideoDeurbel'
								width='90%'
								className={'rounded formImg__second'}
							/>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default MainContainer;
