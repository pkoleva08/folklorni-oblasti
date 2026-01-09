import "./Header.css";
import { Link } from "react-router-dom";
import shevitsa from "../assets/111.jpg";
import headerShevitsa from "../assets/mm.png";

export default function Header() {
  return (
    <>
      <header className="header-container"> 
        <div className="decor"></div>
        <nav className="header-nav">
          <img src={headerShevitsa} alt="Шевица" className="header-shevitsa" />
          <Link to="/" className="nachalo">Начало</Link>
          <img src={headerShevitsa} alt="Шевица" className="header-shevitsa" />
          <Link to="/severnyashka" className="severnqshka-oblast">Северняшка област</Link>
          <img src={headerShevitsa} alt="Шевица" className="header-shevitsa" />
          <Link to="/trakiiska" className="trakiiska-oblast">Тракийска област</Link>
          <img src={headerShevitsa} alt="Шевица" className="header-shevitsa" />
          <Link to="/dobrojanska" className="dobrojanska-oblast">Добруджанска област</Link>
          <img src={headerShevitsa} alt="Шевица" className="header-shevitsa" />
          <Link to="/pirinska" className="pirinska-oblast">Пиринска област</Link>
          <img src={headerShevitsa} alt="Шевица" className="header-shevitsa" />
          <Link to="/rodopska" className="rodopska-oblast">Родопска област</Link>
          <img src={headerShevitsa} alt="Шевица" className="header-shevitsa" />
          <Link to="/shopska" className="shopska-oblast">Шопска област</Link>
          <img src={headerShevitsa} alt="Шевица" className="header-shevitsa" />
          <Link to="/game" className="games-link">Игри</Link>
          <img src={headerShevitsa} alt="Шевица" className="header-shevitsa" />
        </nav>
        <div className="decor"></div>
      </header>
      <div className="shevitsa-row">
        <img src={shevitsa} alt="Шевица" className="shevitsa-decoration" />
        <img src={shevitsa} alt="Шевица" className="shevitsa-decoration" />
        <img src={shevitsa} alt="Шевица" className="shevitsa-decoration" />
        <img src={shevitsa} alt="Шевица" className="shevitsa-decoration" />
        <img src={shevitsa} alt="Шевица" className="shevitsa-decoration" />
      </div>
    </>
  );
}
      