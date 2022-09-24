import Character from './Character';
import { useState } from 'react';
import '../../styles/Main.css';

const Game = ({ characters, level }) => {
	return (
		<div className="game-container">
			<p className="game-container__level">Level {level}</p>
			<div className="game-container__characters">
				{characters.map(character => (
					<Character key={character.id} name={character.name} image={character.image} />
				))}
			</div>
		</div>
	);
};

export default Game;
