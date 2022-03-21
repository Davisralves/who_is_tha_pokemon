import { Link } from "react-router-dom";
import "../css/header.css";

export default function PokedexHeader() {
	return (
		<header>
			<div className="headerDiv">
				<Link className="link" to="/">
					Home
				</Link>
				{/* <Link className="link" to="/HowToPlay">
					Como Jogar
				</Link> */}
			</div>
		</header>
	);
}
