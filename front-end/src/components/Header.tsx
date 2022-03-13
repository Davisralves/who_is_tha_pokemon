import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header>
      <Link to="/comoJogar">Como Jogar</Link>
      <Link to="/jogo">Jogar</Link>
      <Link to="/pokedex">Pokemons</Link>
    </header>
  )
}