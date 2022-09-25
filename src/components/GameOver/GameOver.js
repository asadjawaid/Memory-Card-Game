const GameOver = ({ score, onStartNewGame }) => {
	return (
		<div>
			<h1>Game Over!</h1>
			<p>Your score was {score}</p>
			<button onClick={onStartNewGame}>Start a new game</button>
		</div>
	);
};

export default GameOver;
