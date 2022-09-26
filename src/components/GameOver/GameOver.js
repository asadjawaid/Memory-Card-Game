import styles from '../../styles/GameOver.module.css';

const GameOver = ({ score, onStartNewGame }) => {
	return (
		<div className={styles['game-over-container']}>
			<h1 className={styles['game-over-container__title']}>Game Over!</h1>
			<p>Your score was {score}</p>
			<button className={styles['game-over-container__btn']} onClick={onStartNewGame}>
				Start a new game
			</button>
		</div>
	);
};

export default GameOver;
