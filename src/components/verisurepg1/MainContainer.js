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
			<div className='bg-main-container p-0  hero_section'>
				<Container>
					<Row>
						<Col md='7' className='mt-md-4 pt-5'>
							<div
								className={
									active == 11
										? 'bg-white rounded mb-2'
										: 'bg-orange rounded mb-2'
								}
							>
								<Form className='justify-content-end'>
									<FormGroup className='align-self-center'>
										{active === 11 ? (
											''
										) : (
											<>
												<h3 className='pt-4 pl-4  m-0 text-white veri_Inbraakonderzoek_Paragraph text-light fw--700'>
													Verisure Inbraakonderzoek
												</h3>
												<p className='p-0 m-0 px-3 text-white pb-2 pb-md-4 fs--16 font-weight-normal '>
													Beantwoord enkele vragen
													over jouw kennis. Klik
													hieronder op het antwoord
													wat jij denkt dat juist is
													of wat van toepassing is op
													jouw woning.
												</p>
											</>
										)}

										<div className='mx-md-3 bg-light rounded'>
											<h5 className='p-1 text-dark veri_Inbraakonderzoek_Paragraph text-light fw--400'>
												{active === 1 ? (
													<p className='text-dark fs--17 m-3'>
														1. Hoeveel
														woninginbraken zijn er
														gemiddeld per jaar in
														Nederland?
													</p>
												) : active === 2 ? (
													<p className='text-dark fs--17 m-3'>
														1. Hoeveel
														woninginbraken zijn er
														gemiddeld per jaar in
														Nederland?{' '}
													</p>
												) : active === 3 ? (
													<p className='text-dark fs--17 m-3'>
														2. In welke provincie
														zijn de meeste
														woninginbraken per jaar
														volgens het meest
														recente onderzoek?{' '}
													</p>
												) : active === 4 ? (
													<p className='text-dark fs--17 m-3'>
														2. In welke provincie
														zijn de meeste
														woninginbraken per jaar
														volgens het meest
														recente onderzoek?{' '}
													</p>
												) : active === 5 ? (
													<p className='text-dark fs--17 m-3'>
														3. Hoeveel % van de
														woningen in Nederland is
														voorzien van een
														alarmsysteem?{' '}
													</p>
												) : active === 6 ? (
													<p className='text-dark fs--17 m-3'>
														3. Hoeveel % van de
														woningen in Nederland is
														voorzien van een
														alarmsysteem?
													</p>
												) : active === 7 ? (
													<p className='text-dark fs--17 m-3'>
														4. Waar staat uw woning?
													</p>
												) : active === 8 ? (
													<p className='text-dark fs--17 m-3'>
														4. Waar staat uw woning?
													</p>
												) : active === 9 ? (
													<p className='text-dark fs--17 m-3'>
														5. Zijn uw waardevolle
														spullen zichtbaar van
														buiten?
													</p>
												) : active === 10 ? (
													<p className='text-dark fs--17 m-3'>
														5. Zijn uw waardevolle
														spullen zichtbaar van
														buiten?
													</p>
												) : (
													<FormCard />
												)}
											</h5>
										</div>
									</FormGroup>
									<Container className='align-items-end align-self-end heading-container'>
										<Row className='justify-content-left ml-4  mb-3 mt-md-5 heading-container_row fadeIn'>
											<div
												className={
													active === 1 ||
													active === 3 ||
													active === 5 ||
													active === 7 ||
													active === 9
														? 'cirkel fw--700'
														: 'fw--700 user-select-auto'
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
													<p className='text-dark user-select-auto'>
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
												className='p-0 m-0  mt-1 text-left veri_Inbraakonderzoek_Paragraph text-light fw--700'
												onClick={e => NextCard(e)}
											>
												{active === 1 ? (
													'25.0000 inbraken per jaar'
												) : active === 2 ? (
													<p className='text-dark font-weight-normal user-select-auto'>
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
										<Row className='justify-content-left ml-4  mb-3  heading-container_row fadeIn'>
											<div
												className={
													active === 1 ||
													active === 3 ||
													active === 5 ||
													active === 7 ||
													active === 3 ||
													active === 9
														? 'cirkel fw--700'
														: 'fw--700 user-select-auto'
												}
												onClick={e => NextCard(e)}
											>
												{active === 1 ? (
													'B'
												) : active === 2 ? (
													''
												) : active === 3 ? (
													'B'
												) : active === 4 ? (
													<p className='text-dark font-weight-normal user-select-auto'>
														Correcte antwoord:
													</p>
												) : active === 5 ? (
													'B'
												) : active === 6 ? (
													''
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
												className={
													active === 2 ||
													active === 8 ||
													active === 10
														? 'p-0 m-0 mt-1 text-left veri_Inbraakonderzoek_Paragraph text-light fw--700 user-select-auto'
														: 'p-0 m-0 mt-1 text-left veri_Inbraakonderzoek_Paragraph text-light fw--700'
												}
												onClick={e => NextCard(e)}
											>
												{active === 1 ? (
													'65.0000 inbraken per jaar'
												) : active === 2 ? (
													<span className='font-weight-normal ml-12'>
														{' '}
														65.0000 inbraken per
														jaar
													</span>
												) : active === 3 ? (
													'Utrecht'
												) : active === 4 ? (
													''
												) : active === 5 ? (
													'10 tot 15 procent'
												) : active === 6 ? (
													<span className='font-weight-normal user-select-auto ml-11 fadeIn'>
														5 tot 10 procent
													</span>
												) : active === 7 ? (
													'In een woonwijk'
												) : active === 8 ? (
													<p className='ml-16 veri_Inbraakonderzoek_Paragraph text-light fw--700 user-select-auto '>
														Bedankt voor je
														antwoord.
													</p>
												) : active === 9 ? (
													'Deze zijn deels zichtbaar'
												) : active === 10 ? (
													<div className='user-select-auto'>
														<p className='text-center mr-md-5 veri_Inbraakonderzoek_Paragraph text-light user-select-auto'>
															Bedankt voor je
															gegeven antwoorden.
															Laat Verisure je
															vrijblijvend
															informeren en
															ontvang vandaag een
															GRATIS VIDEODEURBEL
															EN 40% KORTING OP DE
															INSTALLATIE- EN
															AANSCHAFKOSTEN als
															dank voor je
															deelname aan het
															Verisure
															Inbraakonderzoek.
														</p>
													</div>
												) : (
													''
												)}
											</p>
										</Row>
										<Row className='justify-content-left ml-4 mb-3 heading-container_row fadeIn'>
											<div
												className={
													active === 1 ||
													active === 3 ||
													active === 5 ||
													active === 7 ||
													active === 9
														? 'cirkel  fw--700'
														: 'fw--700 user-select-auto'
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
													? ''
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
												className='p-0 mb-2 mt-1 text-left veri_Inbraakonderzoek_Paragraph text-light fw--700'
												onClick={e => NextCard(e)}
											>
												{/* 115.000 inbraken per jaar */}
												{active === 1 ? (
													'115.0000 inbraken per jaar'
												) : active === 2 ? (
													<div className='w-100 ml-10 user-select-auto'>
														<button className='btn btn-md ml-10 bg-white text-dark user-select-auto'>
															Volgende vraag
															{'>>'}
														</button>
													</div>
												) : active === 3 ? (
													'Zuid-Holland'
												) : active === 4 ? (
													<span className='font-weight-normal user-select-auto ml-14'>
														Zuid-Holland
													</span>
												) : active === 5 ? (
													'15 tot 20 procent'
												) : active === 6 ? (
													<div className='w-100 ml-10  text-center justify-content-center user-select-auto'>
														<button className='btn btn-md  ml-10 bg-white font-weight-normal text-dark mx-auto user-select-auto'>
															<span className='forse-Toename_Pargraph user-select-auto'>
																Volgende vraag{' '}
																{'>>'}
															</span>
														</button>
													</div>
												) : active === 7 ? (
													'In enn landelijke omgeving'
												) : active === 8 ? (
													<div className='w-100  ml-10 text-center justify-content-center user-select-auto'>
														<button className='btn btn-md  ml-10 bg-white text-dark  user-select-auto'>
															Volgende vraag{' '}
															{'>>'}
														</button>
													</div>
												) : active === 9 ? (
													'Nee, deze zijn niet zichtbaar'
												) : active === 10 ? (
													<div className='w-100 justify-content-center ml-10  user-select-auto'>
														<button className='btn btn-md ml-10 bg-white text-dark  user-select-auto'>
															Laat je gegevens
															achter {'>>'}
														</button>
													</div>
												) : (
													''
												)}
											</p>
										</Row>
										{active === 3 ||
										active === 4 ||
										active === 5 ? (
											<>
												<Row className='justify-content-left ml-4 mb-3 mb-md-5 heading-container_row fadeIn'>
													<div
														className={
															active == 4
																? 'fw--700 mb-2'
																: 'cirkel  fw--700 mb-2'
														}
														onClick={e =>
															NextCard(e)
														}
													>
														{active === 5 ||
														active === 3
															? 'D'
															: ''}
													</div>
													<p
														className='p-0 m-0 mt-1 text-left veri_Inbraakonderzoek_Paragraph text-light fw--700'
														onClick={e =>
															NextCard(e)
														}
													>
														{active === 3 ? (
															'Noord-Brabant'
														) : active === 5 ? (
															'20 tot 25 procent'
														) : active === 4 ? (
															<div className='w-100 ml-10 user-select-auto'>
																<button className='btn btn-md bg-white ml-10 text-dark user-select-auto'>
																	{/* <span className='forse-Toename_Pargraph user-select-auto'> */}
																	Volgende
																	vraag
																	{'>>'}
																	{/* </span> */}
																</button>
															</div>
														) : (
															''
														)}
													</p>
												</Row>
											</>
										) : (
											''
										)}
									</Container>
								</Form>
							</div>
						</Col>
						<Col md='5'>
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
									<div className='mt--7'>
										<img
											src={GratisVideoDeurbel}
											alt='GratisVideoDeurbel'
											className={
												active === 11
													? 'rounded'
													: 'd-none'
											}
											width='100%'
										/>

										<img
											src={thiefOutSide}
											alt='thiefOutSide'
											width='90%'
											// className={
											// 	'rounded formImg__first '
											// }
										/>
									</div>
								) : (
									<img
										src={MotherSonPic}
										alt='mother_son'
										width='90%'
										className={'rounded formImg__first'}
									/>
								)}
							</div>

							<img
								src={GratisVideoDeurbel}
								alt='GratisVideoDeurbel'
								className={
									active === 11
										? 'rounded formImg__second d-none'
										: 'rounded formImg__second'
								}
								width='100%'
							/>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
}

export default MainContainer;
