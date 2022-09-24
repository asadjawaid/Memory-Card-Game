import { useState, useEffect } from 'react';
import { apiCall } from '../services/apiCall';
import ClipLoader from 'react-spinners/ClipLoader';
import { override } from './Utils/override';
import '../styles/Main.module.css';

import Game from './Game/Game';

const Main = () => {
	const [characters, setCharacters] = useState([]);
	const [errorFetching, setErrorFetching] = useState('');
	const [loading, setLoading] = useState(false);
	const [level, setLevel] = useState(1);

	// make an api call to fetch data
	useEffect(() => {
		setLoading(true);

		apiCall()
			.then(response => {
				const newCharacters = response.data.map(currentCharacter => {
					return {
						id: currentCharacter.id,
						name: currentCharacter.name,
						image: currentCharacter.image
					};
				});

				// setCharacters(prevState => {
				// 	return {
				// 		...prevState,
				// 		newCharacters
				// 	};
				// });
				setCharacters(characters.concat(newCharacters));

				setTimeout(() => {
					setLoading(false);
				}, 500);
			})
			.catch(error => {
				console.log('error fetching');
				setErrorFetching('There was a problem loading the characters. Please refresh the page.');
				setLoading(false);
			});
	}, []);

	return (
		<main className="main">
			{loading ? (
				<ClipLoader color={'#000000'} size={60} cssOverride={override()} />
			) : errorFetching ? (
				<p>{errorFetching}</p>
			) : (
				<Game characters={characters} level={level} />
			)}
			{/* {!loading ? <Game characters={characters} level={level} /> : <p style={{ color: 'black' }}>Still loading...</p>} */}
		</main>
	);
};

export default Main;
