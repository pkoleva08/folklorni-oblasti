import { useEffect, useState } from "react";
import "./MemoryGame.css";

import backImg from "../assets/back.png";

import DJN from "../assets/DJN.png";
import PJN from "../assets/PJN.png";
import RJN from "../assets/RJN.png";
import SJN from "../assets/SJN.png";
import TJN from "../assets/TJN.png";
import SHOJN from "../assets/SHOJN.png";

import DMN from "../assets/DMN.png";
import PMN from "../assets/PMN.png";
import RMN from "../assets/RMN.png";
import SMN from "../assets/SMN.png";
import TMN from "../assets/TMN.png";
import SHOMN from "../assets/SHOMN.png";

import GameOver from "../components/GameOver";

export default function MemoryGame({ level: propLevel = null, onExit = null }) {
    const [level, setLevel] = useState(propLevel);
    const [cards, setCards] = useState([]);
    const [opened, setOpened] = useState([]);
    const [matched, setMatched] = useState([]);
    const [lock, setLock] = useState(true);

    const [started, setStarted] = useState(false);
    const [finished, setFinished] = useState(false);
    const [inGameScreen, setInGameScreen] = useState(false);

    const [time, setTime] = useState(0);
    const [viewTime, setViewTime] = useState(0);

    const womenCards = [
        { img: DJN }, { img: PJN }, { img: RJN },
        { img: SJN }, { img: TJN }, { img: SHOJN },
    ];

    const menCards = [
        { img: DMN }, { img: PMN }, { img: RMN },
        { img: SMN }, { img: TMN }, { img: SHOMN },
    ];

    function generateCards() {
        let selection = [];

        if (level === 1) selection = womenCards;
        if (level === 2) selection = menCards;
        if (level === 3) selection = [...womenCards, ...menCards];

        let final = [...selection, ...selection]
            .map(card => ({ ...card, id: Math.random() }))
            .sort(() => Math.random() - 0.5);

        setCards(final);
    }

    useEffect(() => {
        if (level === null) return;
        generateCards();
    }, [level]);

    useEffect(() => {
        if (!started || viewTime <= 0) return;

        const t = setTimeout(() => setViewTime(v => v - 1), 1000);
        return () => clearTimeout(t);
    }, [started, viewTime]);


    useEffect(() => {
        if (!started || viewTime > 0 || finished) return;

        const t = setInterval(() => setTime(t => t + 1), 1000);
        return () => clearInterval(t);
    }, [started, viewTime, finished]);

    function startGame() {
        if (level === 1) setViewTime(5);
        if (level === 2) setViewTime(5);
        if (level === 3) setViewTime(10);

        setStarted(true);
        setLock(true);
    }


    useEffect(() => {
        if (viewTime === 0 && started) {
            setLock(false);
        }
    }, [viewTime, started]);

    function flipCard(index) {
        if (lock || finished) return;
        if (opened.includes(index) || matched.includes(index)) return;

        const open = [...opened, index];
        setOpened(open);

        if (open.length === 2) {
            setLock(true);
            setTimeout(() => checkMatch(open), 700);
        }
    }

    function checkMatch([a, b]) {
        if (cards[a].img === cards[b].img) {
            const newMatched = [...matched, a, b];
            setMatched(newMatched);

            if (newMatched.length === cards.length) {
                setFinished(true);
                return;
            }
        }

        setOpened([]);
        setLock(false);
    }

    function restartGame() {
        setOpened([]);
        setMatched([]);
        setFinished(false);
        setStarted(false);
        setTime(0);
        generateCards();
    }

    function nextLevel() {
        if (level < 3) {
            const newLevel = level + 1;
            setLevel(newLevel);
            setStarted(false);
            setFinished(false);
            setOpened([]);
            setMatched([]);
            setTime(0);
            setViewTime(0);
        }
    }

    function handleBack() {
        if (onExit && typeof onExit === "function") {
            onExit(null);
            return;
        }

        if (level > 1) setLevel(level - 1);
        else setLevel(null);
    }

    function returnToMenu() {
        setLevel(null);
    }

    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    }

 
    if (level === null) {
        return (
            <div>
                <h1 className="menu-container"> Избери ниво</h1>
                <div className="menu-buttons">
                    <button className="nivo" onClick={() => setLevel(1)}>Ниво 1 – Женски носии</button>
                    <button className="nivo" onClick={() => setLevel(2)}>Ниво 2 – Мъжки носии</button>
                    <button className="nivo" onClick={() => setLevel(3)}>Ниво 3 – Женски носии + Мъжки носии</button>
                </div>
                {onExit && <button onClick={() => onExit(null)}>⬅ Обратно</button>}
            </div>
        );
    }

    if (!inGameScreen) {
        return (
            <div className="start-screen">
                <h1>Ниво {level}</h1>
                <button className="big-btn" onClick={() => {
                    if (cards.length === 0) generateCards();
                    setInGameScreen(true);
                }}>▶ Старт</button>
                <button className="back-btn" onClick={handleBack}>⬅ Обратно</button>
            </div>
        );
    }


    if (finished) {
        return (
            <div className="game-over center-screen">
                <h2 className="big-text"> Браво! Откри всички двойки!</h2>
                <p className="time">⏱ Време: {formatTime(time)}</p>

                <button className="big-btn" onClick={restartGame}>🔄 Рестарт</button>

                {level < 3 && (
                    <button className="big-btn" onClick={nextLevel}>➡ Следващо ниво</button>
                )}
                {level === 3 && (
                    <button
                        className="big-btn"
                        onClick={() => {
                            if (onExit && typeof onExit === "function") onExit(null);
                            else setLevel(null);
                        }}
                    >
                        Избери ниво
                    </button>
                )}
            </div>
        );
    }

    return (
        <div className="memory-game">
            <h1 className="level-title">Ниво {level}</h1>
            
            <div className="level-buttons">
                {!started && <button className="level-btn" onClick={returnToMenu}>Избери ниво</button>}
                <button className="level-btn" onClick={startGame} style={{ display: !started ? 'block' : 'none' }}>Играй</button>
            </div>

            {!started ? (
                <div style={{ marginBottom: 12 }}>
                </div>
            ) : (
                viewTime > 0 ? (
                    <p>Гледай картите: {viewTime} сек.</p>
                ) : (
                    <p className="vreme">⏱ Време: {formatTime(time)}</p>
                )
            )}

            
            <div className={"grid " + (level === 3 ? "grid-6" : "grid-4")}>
                {cards.map((card, i) => {
                    const show = opened.includes(i) || matched.includes(i) || viewTime > 0;

                    return (
                        <div key={card.id} className="card" onClick={() => flipCard(i)}>
                            <img src={show ? card.img : backImg} alt="" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}