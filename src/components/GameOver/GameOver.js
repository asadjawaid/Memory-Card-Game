const GameOver = ({ score }) => {
	return (
		<div>
			<h1>Game Over!</h1>
			<p>Your score was {score}</p>
			<button>New Game</button>
		</div>
	);
};

export default GameOver;
