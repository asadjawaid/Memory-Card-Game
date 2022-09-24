import Logo from '../../images/Logo.svg';
import styles from '../../styles/Header.module.css';
import Score from './Score';

const Header = ({ scoreInfo }) => {
	const { score, bestScore } = scoreInfo;

	return (
		<header>
			<div className={styles['header-container']}>
				<img className={styles['header-container__image']} draggable={false} alt="Star Wars Logo" src={Logo} />
				<h1 className={styles['header-container__title']}>
					Memory <span>Game</span>
				</h1>
			</div>
			<Score score={score} bestScore={bestScore} />
		</header>
	);
};

export default Header;
