import styles from '../styles/Footer.module.css';

const Footer = () => {
	return (
		<footer className={styles['footer-container']}>
			<p>
				<a href="https://github.com/asadjawaid" target="_blank" rel="noopener noreferrer">
					Asad Jawaid
				</a>
			</p>
		</footer>
	);
};

export default Footer;
