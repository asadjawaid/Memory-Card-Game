import '../../styles/Character.css';

const Character = ({ id, name, image, onCharacterHandleClick }) => {
	return (
		<div className="character-container" onClick={() => onCharacterHandleClick(id)}>
			<img className="character-container__image" src={image} alt={name} draggable={false} />
			<p className="character-container__name">{name}</p>
		</div>
	);
};

export default Character;
