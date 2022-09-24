import { useState, useEffect } from 'react';
import { apiCall } from '../services/apiCall';
import ClipLoader from 'react-spinners/ClipLoader';
import { override } from './Utils/override';
import '../styles/Main.module.css';

import Game from './Game/Game';

const Main = () => {
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

	const changeLevel = () => {
		if (level === 2) {
		} else if (level === 3) {
		} else if (level === 4) {
		} else {
			// Game over start new one
		}
	};

	return (
		<main className="main">
			{loading ? (
				<ClipLoader color={'#000000'} size={60} cssOverride={override()} />
			) : errorFetching ? (
				<p>{errorFetching}</p>
			) : (
				<Game
					characters={charactersToDisplay}
					level={level}
					numCharToShow={numCharToShow}
					setCharactersToDisplay={setCharactersToDisplay}
				/>
			)}
		</main>
	);
};

export default Main;
