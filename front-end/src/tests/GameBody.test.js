import { screen } from "@testing-library/react";
import renderWithRouter from "../helpers/renderWithRouter";
import GameBody from "../components/GameBody";
import pokemonDefaulObject from "../helpers/Pokemons";
import userEvent from "@testing-library/user-event";

describe("Testa funcionamento do GameBody", () => {
	describe("Se os componentes são renderizados corretamente", () => {
		test("Se o botão é renderizado corretamente", () => {
			renderWithRouter(
				<GameBody
					pokemons={pokemonDefaulObject}
					sortedPokemon={pokemonDefaulObject[0]}
				/>
			);
			const submitButton = screen.getByRole("button", { value: "Submit" });
			expect(submitButton).toBeInTheDocument();
			expect(submitButton).toHaveAttribute("disabled");
		});
		test("Se o input é renderizado corretamente", () => {
			renderWithRouter(
				<GameBody
					pokemons={pokemonDefaulObject}
					sortedPokemon={pokemonDefaulObject[0]}
				/>
			);
			const input = screen.getByRole("textbox");
			expect(input).toBeInTheDocument();
		});
		test("Se o contador de tentativas é renderizado corretamente", () => {
			renderWithRouter(
				<GameBody
					pokemons={pokemonDefaulObject}
					sortedPokemon={pokemonDefaulObject[0]}
				/>
			);
			const counter = screen.getByRole("heading", { level: 5 });
			expect(counter).toBeInTheDocument();
		});
    test("Se o contador de tentativas esta funcionando corretamente", () => {
      renderWithRouter(
				<GameBody
					pokemons={pokemonDefaulObject}
					sortedPokemon={pokemonDefaulObject[0]}
          endGame={(value) => value}
				/>
			);
			const counter = screen.getByRole("heading", { level: 5 });
			const submitButton = screen.getByRole("button", { value: "Submit" });
			const input = screen.getByRole("textbox");
      expect(counter).toHaveTextContent(`Remaining attempts: ${5}`)
      userEvent.type(input, 'bulbasaur');
      userEvent.click(submitButton);
      expect(counter).toHaveTextContent(`Remaining attempts: ${4}`)
      userEvent.click(submitButton);
      userEvent.click(submitButton);
      userEvent.click(submitButton);
      expect(counter).toHaveTextContent(`Remaining attempts: ${1}`)
      userEvent.click(submitButton);
      expect(counter).toHaveTextContent(`Remaining attempts: ${0}`);
      expect(submitButton).toHaveAttribute('disabled', "");
    })
	});
});
