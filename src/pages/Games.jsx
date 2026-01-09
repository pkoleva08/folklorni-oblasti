import { Link } from 'react-router-dom';
import "./Games.css";

export default function Games() {
    return (
        <div className="games-container">
            <h1 className="games-title">Игри</h1>
            <div className="games-list">
                <Link to="/memory-game" className="game-button">Игра на памет</Link>
                <Link to="/guess-area" className="game-button">Познай областта</Link>
            </div>
        </div>
    );
}