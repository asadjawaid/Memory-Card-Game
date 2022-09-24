import '../../styles/Character.css';

const Character = ({ name, image }) => {
	return (
		<div className="character-container" onClick={() => console.log('Div clicked')}>
			<img className="character-container__image" src={image} alt={name} draggable={false} />
			<p className="character-container__name">{name}</p>
		</div>
	);
};

export default Character;
