import { useState, useEffect } from 'react';
import GameOver from '../../components/GameOver/GameOver';
import GameContainer from './GameContainer';
import '../../styles/Main.css';

const Game = ({ scoreInfo, onNewGame, characterInfo, levelInfo }) => {
	const { charactersToDisplay, numCharToShow, setCharactersToDisplay } = characterInfo;
	const { level, changeLevel } = levelInfo;
	const { score, setScore, setBestScore } = scoreInfo;

	const [clickedCharacters, setClickedCharacters] = useState([]);
	const [gameDone, setGameDone] = useState(false);

	const characterHandleClick = id => {
		// if the character has already been clicked, then game over otherwise add them
		if (clickedCharacters.includes(id)) {
			// game over, so we will display the game over component and restart the game
			setGameDone(true);
			setClickedCharacters([]);
			setBestScore(score);
		} else {
			setScore(score + 1);
			setClickedCharacters(clickedCharacters.concat(id));

			// reorder the the characters after clicking on one
			const toDisplay = [...charactersToDisplay].sort(() => 0.5 - Math.random()).slice(0, numCharToShow);
			setCharactersToDisplay(toDisplay);
		}
	};

	const startNewGame = () => {
		onNewGame();
		setScore(0);
		setGameDone(false);
	};

	useEffect(() => {
		if (score === numCharToShow) {
			changeLevel(level + 1);
		}
	});

	return (
		<>
			{gameDone ? (
				<GameOver score={score} onStartNewGame={startNewGame} />
			) : (
				<GameContainer characters={charactersToDisplay} level={level} characterHandleClick={characterHandleClick} />
			)}
		</>
	);
};

export default Game;
