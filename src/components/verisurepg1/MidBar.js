import React from 'react';
import { Container, Row } from 'reactstrap';
import Banner from '../../assets/img/Banner.png';

function MidBar() {
	return (
		<>
			<Row>
				<img
					src={Banner}
					alt='banner'
					className='mt-0 mt-md-5 w-100 overflow-hidden'
				/>
			</Row>
		</>
	);
}

export default MidBar;
