import { Link } from "react-router-dom";
import Map from "../components/Map";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-page">
      <h1 className="fo">Фолклорни области</h1>
      <div className="home-content">
        <Map />
        
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "20px" }}>
        <Link to="/severnyashka"></Link>
        <Link to="/trakiiska"></Link>
        <Link to="/dobrojanska"></Link>
        <Link to="/pirinska"></Link>
        <Link to="/rodopska"></Link>
        <Link to="/shopska"></Link>
      </div>

      <div className="footer">
        <p className="footer-text">© 2026 Фолклорни области на България.</p>
        <p className="footer-text">Създадено със ❤️ от Поли!</p>
      </div>
    </div>
  );
}
