export default function GameOver({ time, onRestart, onNextLevel, hasNext }) {
    return (
        <div className="game-over">
            <h2>🎉 Браво! Откри всички двойки!</h2>
            <p>⏱ Време: {time} секунди</p>

            <button onClick={onRestart}>🔄 Рестарт</button>

            {hasNext && (
                <button onClick={onNextLevel}>➡ Следващо ниво</button>
            )}
        </div>
    );
}
