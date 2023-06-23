import './ScoreBoard.css';

export default function ScoreBoard({ scoreX, scoreO }) {
	return (
		<div className="score-board">
			<div>X: {scoreX}</div>
			<div>O: {scoreO}</div>
		</div>
	);
}
