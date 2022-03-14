import { screen } from "@testing-library/react";
import renderWithRouter from "../helpers/renderWithRouter";
import Header from "../components/Header";
import App from "../App";
import userEvent from "@testing-library/user-event";
describe("Testando elemento header", () => {
	test("Os links do header estão sendo renderizados corretamente", () => {
		renderWithRouter(<Header />);
		const links = screen.getAllByRole("link");
		expect(links).toHaveLength(3);
		const howToPlay = screen.getByText("Como Jogar");
		const play = screen.getByText("Jogar");
		const pokedex = screen.getByText("Pokedex");
		expect(howToPlay).toBeInTheDocument();
		expect(play).toBeInTheDocument();
		expect(pokedex).toBeInTheDocument();
	});

	describe("Os links do Header estão direcionando para as paginas corretas", () => {
		test('O link "Como jogar" redireciona para pagina correta', () => {
			renderWithRouter(<App />);
      const howToPlay = screen.getByText("Como Jogar");
			userEvent.click(howToPlay);
			expect(screen.getByRole("heading", "Como jogar")).toBeInTheDocument();
		});
    test('O link "Jogar" redireciona para pagina correta', () => {
			renderWithRouter(<App />);
      const play = screen.getByText("Jogar");
			userEvent.click(play);
			expect(screen.getByRole("heading", "Jogar")).toBeInTheDocument();
		});
    test('O link "Pokedex" redireciona para pagina correta', () => {
			renderWithRouter(<App />);
		  const pokedex = screen.getByText("Pokedex");
			userEvent.click(pokedex);
			expect(screen.getByRole("heading", "Pokedex")).toBeInTheDocument();
		});
	});
});
