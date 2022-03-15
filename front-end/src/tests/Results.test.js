import { screen } from "@testing-library/react";
import renderWithRouter from "../helpers/renderWithRouter";
import Header from "../components/Header";
import Result from "../components/Result";
import userEvent from "@testing-library/user-event";
import {GameState} from '../helpers/enums';
import pokemonDefaulObject from '../helpers/Pokemons';

describe('Testando component Results', () => {
  it('Renderiza um span vazio caso o jogo esteja em andamento', () => {
    renderWithRouter(<Result GameState={GameState.inProgress} sortedPokemon={pokemonDefaulObject} />)
    const emptySpan = screen.getByTestId('empty-span');
    const heading = screen.queryByRole('heading', {level: 5});
    expect(emptySpan).toBeInTheDocument();
    expect(heading).not.toBeInTheDocument();
  })
})