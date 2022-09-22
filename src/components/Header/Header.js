import Logo from '../../images/Logo.svg';
import styles from '../../styles/Header.module.css';
import Score from './Score';

const Header = () => {
	return (
		<header>
			<div className={styles['header-container']}>
				<img className={styles['header-container__image']} alt="Star Wars Logo" src={Logo} />
				<h1 className={styles['header-container__title']}>
					Memory <span>Game</span>
				</h1>
			</div>
			<Score />
		</header>
	);
};

export default Header;
