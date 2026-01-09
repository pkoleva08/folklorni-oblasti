import { useState } from "react";
import MemoryGame from "./MemoryGame";

export default function MemoryMenu() {
    const [level, setLevel] = useState(null);

    if (level !== null) {
        return <MemoryGame level={level} onExit={() => setLevel(null)} />;
    }

    return (
        <div className="menu-container">
            <h1>Избери ниво</h1>

            <button onClick={() => setLevel(1)}>Ниво 1 – Женски носии</button>
            <button onClick={() => setLevel(2)}>Ниво 2 – Мъжки носии</button>
            <button onClick={() => setLevel(3)}>Ниво 3 – Жени + Мъже</button>
        </div>
    );
}