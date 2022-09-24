import Character from './Character';
import { useState } from 'react';
import '../../styles/Main.css';

const Game = ({ characters, level, numCharToShow, setCharactersToDisplay }) => {
	const [clickedCharacters, setClickedCharacters] = useState([]);

	const characterHandleClick = id => {
		console.log('Character clicked ' + id);
		// if the character has already been clicked, then game over otherwise add them
		if (clickedCharacters.includes(id)) {
			alert(`Character ${id} is already present in the array`);
			// game over, so we will display the game over component and restart the game
			return;
		}

		setClickedCharacters(clickedCharacters.concat(id));
		// reorder the the characters after clicking on one
		const toDisplay = [...characters].sort(() => 0.5 - Math.random()).slice(0, numCharToShow);
		setCharactersToDisplay(toDisplay);
	};
	// this function will get called once the player wins a level
	// const test = () => {
	// 	// update the
	// 	let toDisplay = [];

	// 	switch (level) {
	// 		case 1:
	// 			toDisplay = [...characters].sort(() => 0.5 - Math.random()).slice(0, 4);
	// 			break;
	// 		case 2:
	// 			toDisplay = [...characters].sort(() => 0.5 - Math.random()).slice(0, 6);
	// 			break;
	// 		case 3:
	// 			toDisplay = [...characters].sort(() => 0.5 - Math.random()).slice(0, 10);
	// 			break;
	// 		case 4:
	// 			toDisplay = [...characters].sort(() => 0.5 - Math.random()).slice(0, 12);
	// 			break;
	// 		default:
	// 			break;
	// 	}

	// 	// setCharactersToShow(charactersToShow.concat(toDisplay));
	// };

	return (
		<div className="game-container">
			<p className="game-container__level">Level {level}</p>
			<div className="game-container__characters">
				{characters.map(character => (
					<Character
						key={character.id}
						id={character.id}
						name={character.name}
						image={character.image}
						onCharacterHandleClick={characterHandleClick}
					/>
				))}
			</div>
		</div>
	);
};

export default Game;
