import styles from '../../styles/Score.module.css';

const Score = ({ score, bestScore }) => {
	return (
		<div className={`${styles['score-container']}`}>
			<div className={`${styles['score-container__current-score']} ${styles['score-style']}`}>
				Current Score: {score}
			</div>
			<div className={`${styles['score-container__best-score']} ${styles['score-style']}`}>Best Score: {bestScore}</div>
		</div>
	);
};

export default Score;
