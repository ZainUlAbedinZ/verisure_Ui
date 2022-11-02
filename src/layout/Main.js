import Header from '../components/Header';
import Footer from '../components/Footer';

const Main = props => {
	return (
		<>
			<Header />
			{props.children}
			<Footer className='footer' />
		</>
	);
};

export default Main;
