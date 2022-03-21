import { screen } from "@testing-library/react";
import renderWithRouter from "../helpers/renderWithRouter";
import Header from "../components/Header";
import App from "../App";
import userEvent from "@testing-library/user-event";

describe("Testando elemento header", () => {
	test("Os links do header estão sendo renderizados corretamente", () => {
		renderWithRouter(<Header isFetched={true}/>);
		const links = screen.getAllByRole("link");
		expect(links).toHaveLength(1);
		const pokedex = screen.getByText("Pokedex");
		expect(pokedex).toBeInTheDocument();
	});

	describe("O Link do header muda seu texto para loading caso os pokemons estejam sendo requisitados", () => {
		test('O link mostra mensagem de loading', () => {
			renderWithRouter(<Header isFetched={false} />);
			expect(screen.getByText("Loading...")).toBeInTheDocument();
		});
    test('O link "Pokedex" redireciona para pagina correta', () => {
			renderWithRouter(<Header isFetched={true} />);
		  const pokedex = screen.getByText("Pokedex");
			userEvent.click(pokedex);
			expect(screen.getByText("Pokedex")).toBeInTheDocument();
		});
	});
});
