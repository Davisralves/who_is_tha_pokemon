import { Link } from "react-router-dom"
import '../css/header.css';

export default function Header() {
  return (
    <header>
      <div className="headerDiv">
      <Link className="link" to="/comoJogar">Como Jogar</Link>
      <Link className="link" to="/pokedex">Pokedex</Link>
      </div>
    </header>
  )
}