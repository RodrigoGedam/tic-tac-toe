import classNames from 'classnames';
import './Square.css';

export default function Square({ turn, value, onClick, winner }) {
	const handleClick = () => {
		turn !== null && value === null && onClick();
	};

	let squareClass = classNames({
		square: true,
		[`square--${value}`]: value !== null,
		winner: winner,
	});

	return <div className={squareClass} onClick={() => handleClick()}></div>;
}
