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
			<Form className='justify-content-end   '>
				<img
					src={VerisureDesktop}
					alt='VerisureDesktop'
					className='w-50'
				/>
				<div className='bg-orange'>
					<FormGroup className='align-self-center bg-orange '>
						<div className='container py-3'>
							<h5 className='p-3 text-white veri_Inbraakonderzoek_Paragraph fw--800'>
								{/* <p className='text-white text-center veri_Inbraakonderzoek_paragraph '> */}
								Bescherm wat voor jou belangrijk is! Laat je
								vrijblijvend informeren over een alarmsysteem op
								maat.
								{/* </p> */}
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
									/>
								</Col>
								<Col sm='6'>
									<Label className='text-white veri_Inbraakonderzoek_Paragraph fw--700 fs--17'>
										Achternaam
									</Label>
									<Input
										type='text'
										placeholder='bv.de Jong'
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
								/>
							</Row>

							<Row className='mx-1 my-1'>
								<Label className='text-white veri_Inbraakonderzoek_Paragraph fw--700 fs--17'>
									Email
								</Label>
								<Input
									type='email'
									placeholder='bv.piet@dejong.nl'
								/>
							</Row>
							<Button
								color='success'
								className='btn w-100 mx-1 my-4 py-3 btn-bg btn-secondary forse-Toename_Pargraph'
							>
								<h2>GRATIS BEREKENEN </h2>
							</Button>

							{/* SMALL */}
							<small className='text-center pt-3 px-md-2 mb-4 text-white veri_Inbraakonderzoek_Paragraph fw--700'>
								Door op “Gratis berekenen” te drukken ga je
								akkoord met de algemene voorwaarden. Verisure
								informeert je eenmalig per e-mail of telefoon
								gratis over de verschillende alarmsystemen.
							</small>
						</div>
					</FormGroup>
				</div>
			</Form>
		</>
	);
}

export default FormCard;
