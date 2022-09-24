import Header from './components/Header/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './styles/global.css';

const App = () => {
	return (
		<div className="main-container">
			<Header />
			<Main />
			{/* <Footer /> */}
		</div>
	);
};

export default App;
