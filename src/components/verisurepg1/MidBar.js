import React from 'react';
import { Container, Row } from 'reactstrap';
import Banner from '../../assets/img/Banner.png';

function MidBar() {
	return (
		<>
			<Container fluid>
				<Row>
					<img
						src={Banner}
						alt='banner'
						className='mt-0 mt-md-0 w-100 overflow-hidden'
					/>
				</Row>
			</Container>
		</>
	);
}

export default MidBar;
