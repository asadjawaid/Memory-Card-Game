import Character from './Character';
import { useState } from 'react';
import GameOver from '../../components/GameOver/GameOver';
import GameContainer from './GameContainer';
import '../../styles/Main.css';

const Game = ({ characters, level, numCharToShow, setCharactersToDisplay, scoreInfo }) => {
	const { score, setScore, setBestScore } = scoreInfo;

	const [clickedCharacters, setClickedCharacters] = useState([]);
	const [gameDone, setGameDone] = useState(false);

	const characterHandleClick = id => {
		console.log('Character clicked ' + id);
		// if the character has already been clicked, then game over otherwise add them
		if (clickedCharacters.includes(id)) {
			// game over, so we will display the game over component and restart the game
			setBestScore(score);
			setGameDone(true);
			return;
		}

		setClickedCharacters(clickedCharacters.concat(id));
		// reorder the the characters after clicking on one
		const toDisplay = [...characters].sort(() => 0.5 - Math.random()).slice(0, numCharToShow);
		setCharactersToDisplay(toDisplay);
		setScore(score + 1);
	};

	return (
		<>
			{gameDone ? (
				<GameOver score={score} />
			) : (
				<GameContainer characters={characters} level={level} characterHandleClick={characterHandleClick} />
				// <div className="game-container">
				// 	<p className="game-container__level">Level {level}</p>
				// 	<div className="game-container__characters">
				// 		{characters.map(character => (
				// 			<Character
				// 				key={character.id}
				// 				id={character.id}
				// 				name={character.name}
				// 				image={character.image}
				// 				onCharacterHandleClick={characterHandleClick}
				// 			/>
				// 		))}
				// 	</div>
				// </div>
			)}
		</>
	);
};

export default Game;
