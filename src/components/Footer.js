import React, { useState } from 'react';
import { Container, Row, Modal, ModalBody, ModalHeader } from 'reactstrap';
import {
	Col,
	Button,
	Input,
	Form,
	Spinner,
	Label,
	FormGroup,
} from 'reactstrap';

function Footer() {
	const [ModalVisible, setModalVisible] = useState(false);
	const [textModal, setTextModal] = useState(false);
	// Modal
	const handleModalVisible = () => {
		setModalVisible(!ModalVisible);
	};
	// Modal Text
	const textModalVisible = () => {
		setTextModal(!textModal);
	};

	// On Close Handler
	const onModalCloseHandler = () => {
		setModalVisible(false);
	};
	// On Close HANDLER
	const onTextModalCloseHandler = () => {
		setTextModal(false);
	};

	return (
		<>
			<div className='footer'>
				<Container className='text-light'>
					<Modal
						isOpen={ModalVisible}
						onRequestClose={onModalCloseHandler}
						toggle={handleModalVisible}
						centered
					>
						<Row className='justify-content-between  mr-3'>
							<Label className='float-left ml-5 mt-3 text-dark font-weight-bold'>
								Voorwaarden
							</Label>
							<Button
								// id="Add_Button"
								className='btn btn-danger bg-none text-center float-right mt-2'
								type='submit'
								onClick={onModalCloseHandler}
							>
								X
							</Button>
						</Row>
						<br />
						<ModalBody>
							<h5 className='text-dark font-weight-bold'>
								Bekijk hier onze algemene voorwaarden
							</h5>
						</ModalBody>
						<div className='mx-auto'>
							<Button
								className='btn btn-danger text-center mb-3'
								type='button'
							>
								Download
							</Button>
						</div>
					</Modal>
					{/* Text Modal */}
					<Modal
						isOpen={textModal}
						onRequestClose={onTextModalCloseHandler}
						toggle={textModalVisible}
						centered
					>
						<Row className='justify-content-between  mr-3'>
							<Label className='float-left ml-5 mt-3 text-dark font-weight-bold'>
								Privacybeleid
							</Label>
							<Button
								className='btn btn-danger bg-none text-center float-right mt-2'
								type='submit'
								onClick={onTextModalCloseHandler}
							>
								X
							</Button>
						</Row>
						<br />
						<ModalBody className='text-dark'>
							<div className='overflow-y'>
								<h5 className='text-danger'>Pricacybeleid</h5>
								<br />
								<b className='text-bold text-dark'>Algemeen</b>
								<br />
								De WEBSITE gebruikt sessiecookies en permanente
								cookies om bijvoorbeeld de gewenste taal te
								onthouden of te helpen bij het invullen van een
								formulier. Sessiecookies worden gewist zodra de
								GEBRUIKER de browser afsluit.
								<br />
								Het doel van dit privacybeleid is om de
								GEBRUIKERS van de websites die toegankelijk zijn
								via de URL www.verisure.nl en
								www.securitas-direct.nl op de hoogte te stellen
								van de wijze waarop hun persoonsgegevens kunnen
								worden verzameld en verwerkt door SECURITAS
								DIRECT BV. <br />
								Elk gebruik van de WEBSITE om welke reden dan
								ook impliceert de aanvaarding zonder enig
								voorbehoud door de GEBRUIKER van dit
								privacybeleid.
								<br />
								<b className='text-bold text-dark'>
									ARTIKEL 1 DEFINITIES
								</b>
								<br />
								« WEBSITE »: betekent alle pagina's van de sites
								die toegankelijk zijn via de URL-adressen
								http://www.verisure.nl en
								http://www.securitas-direct.nl <br />« GEBRUIKER
								»: betekent elke persoon die toegang heeft tot
								en navigeert op de WEBSITE, inclusief klanten
								die zich hebben geabonneerd op het aanbod van
								diensten aangeboden door SECURITAS DIRECT BV{' '}
								<br />
								<b className='text-bold text-dark'>
									ARTIKEL 2 IDENTITEIT VAN DE
									VERANTWOORDELIJKE VOOR DE VERWERKING
								</b>
								<br />
								De persoonsgegevens worden verzameld door de
								vennootschap SECURITAS DIRECT BV, besloten
								vennootschap, met maatschappelijke zetel te Joan
								Muyskenweg 130 – 1114 AN Amsterdam, ingeschreven
								bij de KVK onder nummer 17158925.
								<br />
								<b className='text-bold text-dark'>
									ARTIKEL 3 DE VERWERKING VAN GEGEVENS
								</b>
								<br />
								In het kader van het gebruik van de WEBSITE kan
								SECURITAS DIRECT BV persoonsgegevens verzamelen.
								Deze gegevens worden verwerkt in overeenstemming
								met de beoogde doeleinden van de verzameling.{' '}
								<br />
								SECURITAS DIRECT BV kan met name
								persoonsgegevens verzamelen wanneer een
								GEBRUIKER een verzoek doet op de WEBSITE tot het
								bekomen van een offerte. <br />
								Daarnaast is de verzameling en verwerking van
								persoonsgegevens nodig voor de goede werking van
								de WEBSITE, de uitvoering van verzoeken tot
								contactneming op de WEBSITE en de productie van
								statistieken die bedoeld zijn om de werking van
								de WEBSITE te verbeteren. SECURITAS DIRECT BV
								kan deze gegevens ook gebruiken voor wettelijke
								en/of reglementaire doeleinden. <br />
								SECURITAS DIRECT BV kan met name de volgende
								gegevens verzamelen, opslaan en gebruiken:{' '}
								<br />
								Naam, voornaam, adres, postcode, woonplaats,
								telefoonnummer, e-mailadres, IP-adres. <br />
								In ieder geval verbindt SECURITAS DIRECT BV zich
								ertoe om alle verzamelde gegevens te verwerken
								in overeenstemming met de Privacywet. <br />
								<b className='text-bold text-dark'>
									ARTIKEL 4 RECHTEN VAN GEBRUIKERS
								</b>{' '}
								<br />
								Er wordt aan herinnerd dat de persoon wiens
								persoonsgegevens worden verwerkt, geniet van het
								recht op toegang, verbetering, aanvulling,
								verwijdering en afscherming tegen de verwerking
								van zijn persoonsgegevens, in overeenstemming
								met artikel 35 en volgende van de Privacywet.{' '}
								<br />
								Deze rechten kunnen worden uitgeoefend, in
								overeenstemming met de Privacywet en op
								eenvoudig verzoek, door het versturen van een
								e-mail naar het adres privacy@verisure.nl of een
								brief gericht aan de Klantenservice op het
								hierboven vermelde adres met het bijsluiten van
								een identiteitsbewijs en opgave te doen van een
								legitieme reden als dit wettelijk verplicht is.{' '}
								<br />
								SECURITAS DIRECT BV verbindt er zich bovendien
								toe de verzamelde gegevens te bewaren in een
								vorm die toelaat de betrokken personen te
								identificeren voor een periode die niet langer
								is dan nodig voor de doeleinden waarvoor zij
								worden verzameld en verwerkt. <br />
								<b className='text-bold text-dark'>
									ARTIKEL 5 DOORGEVEN VAN PERSOONSGEGEVENS
								</b>
								<br />
								SECURITAS DIRECT BV kan de persoonsgegevens die
								op de WEBSITE zijn verzameld doorgeven aan
								bedrijven die behoren tot de groep SECURITAS
								DIRECT. <br />
								SECURITAS DIRECT BV behoudt zich ook het recht
								voor om de persoonsgegevens die op de WEBSITE
								zijn verzameld, door te geven om aan zijn
								wettelijke verplichtingen te voldoen, en in het
								bijzonder wanneer zij daartoe door een
								gerechtelijke vordering wordt gedwongen. <br />
								<b className='text-bold text-dark'>
									ARTIKEL 6 COOKIES
								</b>{' '}
								<br />
								De WEBSITE gebruikt sessiecookies en permanente
								cookies om bijvoorbeeld de gewenste taal te
								onthouden of te helpen bij het invullen van een
								formulier. Sessiecookies worden gewist zodra de
								GEBRUIKER de browser afsluit. Permanente cookies
								worden opgeslagen voor maximaal 1 jaar. <br />
								SECURITAS DIRECT BV maakt ook gebruik van
								cookies van derden, bijvoorbeeld van Google
								Analytics, zodat kan worden gemeten van waar de
								GEBRUIKER vandaan komt, welke besturingssysteem
								deze gebruikt, hoeveel mensen bepaalde pagina´s
								bezoeken, etc. Deze informatie is voor SECURITAS
								DIRECT BV van groot belang; op basis van deze
								meetgegevens kunnen we de website optimaliseren
								en gebruiksvriendelijker maken. <br />
								De meeste browsers accepteren cookies standaard.
								De GEBRUIKER kan voorkomen dat cookies in uw
								browser worden opgeslagen door de instellingen
								van de browser te veranderen. De GEBRUIKER kan
								ook opgeslagen cookies verwijderen. In Internet
								Explorer vindt u de instellingen onder Extra
								Internetopties en in Firefox onder Extra Opties.
								Bij het uitzetten van cookies kan de GEBRUIKER
								niet altijd van alle mogelijkheden van de
								website gebruik maken. Het kan daardoor gebeuren
								dat de surfervaring niet optimaal is of dat
								bepaalde functies, zoals taalinstellingen, niet
								werken zoals de GEBRUKER zou verwachten. <br />
								<b className='text-bold text-dark'>
									ARTIKEL 7 BEVEILIGING
								</b>
								<br />
								SECURITAS DIRECT BV verbindt zich ertoe alle
								nodige voorzorgsmaatregelen te treffen met
								betrekking tot de risico's die de verwerking met
								zich meebrengt, om de veiligheid van de gegevens
								te waarborgen en in het bijzonder om te
								voorkomen dat ze worden vervormd of beschadigd
								of dat onbevoegde derden er toegang toe hebben.{' '}
								<br />
								SECURITAS DIRECT BV verbindt er zich met name
								toe alle technische voorschriften na te leven
								waaraan de verwerkingen moeten voldoen.
							</div>
						</ModalBody>
						<div className='align-self-end mr-2'>
							<Button
								className='btn btn-danger text-center mb-3'
								type='button'
								onClick={onTextModalCloseHandler}
							>
								Ok
							</Button>
						</div>
					</Modal>
					<Row>
						<div className='text-center'>
							<p className='text-dark'>
								Bij deelname aan deze online campagne en het
								verzenden van je gegevens stemt je in met de
								<span onClick={() => setModalVisible(true)}>
									{' '}
									voorwaarden
								</span>{' '}
								en de{' '}
								<span onClick={() => setTextModal(true)}>
									privacyverklaring
								</span>
								. <br />
								<small>
									Deze actie wordt uitgevoerd in samenwerking
									met Verisure. ( Securitas Direct NV,
									Onderneming voor alarmsystemen 20.1325.07
									Bewakingsonderneming 16.1025.11 )
								</small>
							</p>
						</div>
					</Row>
				</Container>
			</div>
		</>
	);
}

export default Footer;
