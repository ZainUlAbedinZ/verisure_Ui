import React from 'react';
import verisure from '../assets/img/verisure_logo.png';

const Header = props => {
	return (
		<>
			<div className='mt-4 text-center'>
				<h1 className='text-white fw--700 w-100 p-0 m-0 Forse-toename_pargraph'>
					Forse toename{' '}
					<span className='text-orange'>woninginbraken </span> door de
					zomermaanden!
				</h1>
				<h3 className='Forse-toename_pargraph'>
					Test je kennis en ontvang een GRATIS videodeurbel + 40%
					korting!
				</h3>
			</div>
			<div className='text-center py-3 py-md-0 bg-white d-block d-md-none'>
				<img src={verisure} alt='verisure' width='30%' />
			</div>
		</>
	);
};

export default Header;
