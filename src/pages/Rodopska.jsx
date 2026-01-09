import rjn from "../assets/RJN.png";
import rmn from "../assets/RMN.png";
import ro from "../assets/RO.jpg";
import left from "../assets/left.jpg";
import right from "../assets/right.jpg";
import { Link } from "react-router-dom";
import "./Rodopska.css";

export default function Rodopska() {
  return (
    <div style={{ padding: "20px", lineHeight: "1.6" }}>
      <h1 className="rodopska-title">Родопска фолклорна област</h1>
      <img src={ro} alt="Родопска фолклорна област" className="ro-img"/>

      <p className="ro">Родопската фолклорна област обхваща Родопа планина в южната част на България. Границите й се очертават така:</p>
      <ul className="ro-posoki">
        <li>на север - до Старопланинските възвишения и низините на Тракия,</li>
        <li>на изток - до границата на Турция,</li>
        <li>на юг - до Гърция,</li>
        <li>на запад - до Пиринската област.</li>
      </ul>
      <p className="ro">Обхваща градовете Рудозем, Златоград, Кърджали, Асеновград.</p>

      <h2 className="ro-tanci">Родопски танци</h2>
      <p className="ro">Родопските танци са бавни и умерени, обрани в движенията и почти винаги съпроводени с песни.</p>

      <h2 className="ro-tanci">Родопска фолклорна носия</h2>
      <h3 className="nosiq">Женска носия</h3>
      <img src={rjn} alt="Пиринска женска носия" className="nosiq-img"/>

      <ul className="ro-posoki">
        <li>Ризата е чисто бяла, а по краищата ѝ нежно се откроява фина дантела.</li>
        <li>Сукманът е в цвят бордо като по деколтето и края на сукмана има елементи в златно и червено.</li>
        <li>Характерното за тази област е, че и жените носят елек в цвят бордо с интересни златни компоненти по него.</li>
        <li>Престилката е червена с оранжеви, жълти и зелени пресичащи се линии.</li>
        <li>Допълват визията на носията с червена кърпа на главата си.</li>
        <li>Финален детайл в облеклото са традиционните родопски цървули.</li>
      </ul>

      <h3 className="nosiq">Мъжка носия</h3>
      <img src={rmn} alt="Мъжка носия" className="nosiq-img"/>
      <ul className="ro-posoki">
        <li>Основен елемент от облеклото е бяла риза с шевици по деколтето и ръкавите в червено, синьо, зелено и черно.</li>
        <li>Една от основните дрехи са черни или много тъмнокафяви потури.</li>
        <li>Елекът е тъмнокафяв с черни елементи.</li>
        <li>На кръста се увива широк червен пояс.</li>
        <li>Неизменна част от облеклото е черен калпак.</li>
        <li>Визията се завършва с традиционните цървули.</li>
      </ul>

      <h2 className="ro-tanci">Известни хора</h2>
      <p className="ro">"Сворното", "Чукано", "Право родопско".</p>

      <h2 className="ro-tanci">Характерни инструменти</h2>
      <p className="ro">Характерните инструменти са каба гайда, тамбуря, чанове (медни овчарски звънци) и кавал.</p>
    <div className="r-button-container">
                <Link to="/" className="r-button">Начало</Link>
            </div>
            <div className="r-images">
                <img src={left} alt="Долен ляв ъгъл" className="r-left" />
                <img src={right} alt="Долен десен ъгъл" className="r-right" />
            </div>
    </div>
  );
}