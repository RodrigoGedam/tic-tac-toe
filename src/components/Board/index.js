import Square from '../Square';
import './Board.css';

export default function Board({ turn, squares, onClick, winningSquares }) {
	const createSquares = (values) =>
		values.map((value) => (
			<Square
				winner={winningSquares.includes(value)}
				turn={turn}
				onClick={() => onClick(value)}
				key={`square_${value}`}
				value={squares[value]}
			/>
		));

	return (
		<div className="board">
			<div className="row">{createSquares([0, 1, 2])}</div>
			<div className="row">{createSquares([3, 4, 5])}</div>
			<div className="row">{createSquares([6, 7, 8])}</div>
		</div>
	);
}
