import styles from '../../styles/Score.module.css';

const Score = () => {
	return (
		<div className={`${styles['score-container']}`}>
			<div className={`${styles['score-container__current-score']} ${styles['score-style']}`}>Current Score: 0</div>
			<div className={`${styles['score-container__best-score']} ${styles['score-style']}`}>Best Score: 0</div>
		</div>
	);
};

export default Score;
