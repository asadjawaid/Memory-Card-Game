import Header from './components/Header/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './styles/global.css';

const App = () => {
	return (
		<div className="game-container">
			<Header />
			<Main />
			<Footer />
		</div>
	);
};

export default App;
