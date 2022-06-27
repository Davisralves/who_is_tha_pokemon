import { screen } from "@testing-library/react";
import renderWithRouter from "../../helpers/renderWithRouter";
import Result from "./index";
import { GameState } from "../../helpers/enums";
import pokemonDefaulObject from "../../helpers/Pokemons";
import { capitalizeFirstLetter } from "../../helpers/Pokemons";

describe("Testando component Results", () => {
	it("Renderiza um span vazio caso o jogo esteja em andamento", () => {
		renderWithRouter(
			<Result
				GameState={GameState.inProgress}
				sortedPokemon={pokemonDefaulObject[0]}
			/>
		);
		const emptySpan = screen.queryByTestId("empty-span");
		const heading = screen.queryByRole("heading", { level: 5 });
		expect(emptySpan).toBeInTheDocument();
		expect(heading).not.toBeInTheDocument();
	});
	describe("Renderiza a mensagem ao finalizar o jogo corretamente", () => {
		test('Se o componente imprime "You Win!" em caso de Vitória', () => {
			renderWithRouter(
				<Result
					GameState={GameState.success}
					sortedPokemon={pokemonDefaulObject[0]}
				/>
			);
			const winMessage = screen.queryByText("You Win!");
			expect(winMessage).toBeInTheDocument();
		});
		test("Se o componente imprime a mensagem de derrota corretamente", () => {
			renderWithRouter(
				<Result
					GameState={GameState.failed}
					sortedPokemon={pokemonDefaulObject[0]}
				/>
			);
			const winMessage = screen.queryByText(
				`You lost ! The secret Pokémon was ${capitalizeFirstLetter(
					pokemonDefaulObject[0].name
				)}`
			);
			expect(winMessage).toBeInTheDocument();
		});
	});
});
