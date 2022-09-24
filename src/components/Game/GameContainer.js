import Character from './Character';

const GameContainer = ({ characters, level, characterHandleClick }) => {
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

export default GameContainer;
