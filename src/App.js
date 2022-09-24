import Header from './components/Header/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './styles/global.css';
import { useState } from 'react';

const App = () => {
	const [score, setScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);

	const scoreInfo = {
		score,
		bestScore,
		setScore,
		setBestScore
	};

	return (
		<div className="main-container">
			<Header scoreInfo={scoreInfo} />
			<Main scoreInfo={scoreInfo} />
			{/* <Footer /> */}
		</div>
	);
};

export default App;
