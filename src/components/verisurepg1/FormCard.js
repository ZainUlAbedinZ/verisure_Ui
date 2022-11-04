import React from 'react';

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
import VerisureDesktop from '../../assets/img/verisure_Desktop.png';

function FormCard() {
	return (
		<>
			<div className='bg-white'>
				<Form className='justify-content-end py-3'>
					<img
						src={VerisureDesktop}
						alt='VerisureDesktop'
						className='w-50'
					/>
					<div className='bg-orange p-3 rounded '>
						<FormGroup className='align-self-center  bg-orange rounded'>
							{/* <div className='mt-3 d-md-none'>
								<img
									src={VerisureDesktop}
									alt='VerisureDesktop'
									className='w-50 mt-3 d-md-none'
								/>
							</div> */}
							<div className='container py-3'>
								<h5 className='p-3 m-3 text-white veri_Inbraakonderzoek_Paragraph fw--800'>
									Bescherm wat voor jou belangrijk is! Laat je
									vrijblijvend informeren over een
									alarmsysteem op maat.
								</h5>
								<br />
								<Row className=''>
									<Col sm='6'>
										<Label className='text-white veri_Inbraakonderzoek_Paragraph fw--700 fs--17'>
											Voornam
										</Label>
										<Input
											type='text'
											placeholder='bv.Pieter'
											className='fw--100 text-muted'
										/>
									</Col>
									<Col sm='6'>
										<Label className='text-white veri_Inbraakonderzoek_Paragraph fw--700 fs--17'>
											Achternaam
										</Label>
										<Input
											type='text'
											placeholder='bv.de Jong'
											className='fw--100 text-muted'
										/>
									</Col>
								</Row>
								<Row className='mx-1 my-1'>
									<Label className='text-white veri_Inbraakonderzoek_Paragraph fw--700 fs--17'>
										Telefoonnummer
									</Label>
									<Input
										type='number'
										placeholder='bv.06123456'
										className='fw--100 text-muted'
									/>
								</Row>

								<Row className='mx-1 my-1'>
									<Label className='text-white veri_Inbraakonderzoek_Paragraph fw--700 fs--17'>
										Email
									</Label>
									<Input
										type='email'
										placeholder='bv.piet@dejong.nl'
										className='fw--100 text-muted'
									/>
								</Row>
								<Button className='btn w-100 my-4 py-3 btn-bg btn-secondary'>
									<span>
										<h2>GRATIS BEREKENEN </h2>
									</span>
								</Button>

								{/* SMALL */}
								<small className='text-center pt-3 px-md-0 mb-4 text-white font-weight-light'>
									Door op “Gratis berekenen” te drukken ga je
									akkoord met de algemene voorwaarden.
									Verisure informeert je eenmalig per e-mail
									of telefoon gratis over de verschillende
									alarmsystemen.
								</small>
							</div>
						</FormGroup>
					</div>
				</Form>
			</div>
		</>
	);
}

export default FormCard;
