import { useState, useEffect } from 'react';
import { apiCall } from '../services/apiCall';
import ClipLoader from 'react-spinners/ClipLoader';
import { override } from './Utils/override';
import '../styles/Main.module.css';

import Game from './Game/Game';

const Main = ({ scoreInfo }) => {
	const { score, setScore, setBestScore } = scoreInfo;

	const [characters, setCharacters] = useState([]);
	const [charactersToDisplay, setCharactersToDisplay] = useState([]);
	const [errorFetching, setErrorFetching] = useState('');
	const [loading, setLoading] = useState(false);
	const [level, setLevel] = useState(1);
	const [numCharToShow, setNumCharToShow] = useState(4);

	// make an api call to fetch data
	useEffect(() => {
		setLoading(true);

		apiCall()
			.then(response => {
				let counterId = 0;

				const newCharacters = response.data.map(currentCharacter => {
					counterId++;
					return {
						id: counterId,
						name: currentCharacter.name,
						image: currentCharacter.image
					};
				});

				setCharacters(newCharacters);

				// One the first render, we will only display four random characters then each level we add more...
				let toDisplay = [...newCharacters].sort(() => 0.5 - Math.random()).slice(0, 4);
				setCharactersToDisplay(toDisplay);

				setLoading(false);
			})
			.catch(error => {
				console.log('error fetching');
				setErrorFetching('There was a problem loading the characters. Please refresh the page.');
				setLoading(false);
			});
	}, []);

	const changeLevel = newLevel => {
		let toDisplay = [];

		if (newLevel === 2) {
			toDisplay = [...characters].sort(() => 0.5 - Math.random()).slice(0, 6);
			setNumCharToShow(6);
		} else if (newLevel === 3) {
			toDisplay = [...characters].sort(() => 0.5 - Math.random()).slice(0, 8);
			setNumCharToShow(8);
		} else if (newLevel === 4) {
			toDisplay = [...characters].sort(() => 0.5 - Math.random()).slice(0, 10);
			setNumCharToShow(10);
		} else if (newLevel === 5) {
			toDisplay = [...characters].sort(() => 0.5 - Math.random()).slice(0, 12);
			setNumCharToShow(12);
		} else {
			// game over, start a new game
			setScore(0);
			setBestScore(0);
			toDisplay = [...characters].sort(() => 0.5 - Math.random()).slice(0, 4);
			setNumCharToShow(4);
		}

		setLevel(newLevel);
		setBestScore(score);
		setScore(0);
		setCharactersToDisplay(toDisplay);
	};

	const newGame = () => {
		setCharactersToDisplay([]);
		// re shuffle and get 4 random characters
		let toDisplay = [...characters].sort(() => 0.5 - Math.random()).slice(0, 4);
		setCharactersToDisplay(toDisplay);
		setNumCharToShow(4);
	};

	const characterInfo = {
		charactersToDisplay,
		numCharToShow,
		setCharactersToDisplay
	};

	const levelInfo = {
		level,
		setLevel,
		changeLevel
	};

	return (
		<main className="main">
			{loading ? (
				<ClipLoader color={'#000000'} size={60} cssOverride={override()} />
			) : errorFetching ? (
				<p>{errorFetching}</p>
			) : (
				<Game characterInfo={characterInfo} levelInfo={levelInfo} scoreInfo={scoreInfo} onNewGame={newGame} />
			)}
		</main>
	);
};

export default Main;
