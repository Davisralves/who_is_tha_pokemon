import { screen } from "@testing-library/react";
import renderWithRouter from "../helpers/renderWithRouter";
import Game from '../components/Game';
import pokemonDefaulObject from '../helpers/Pokemons';

describe("Testa funcionamento do Game", () => {
  test('Se a mensagem "loading" aparece caso não exista reposta da api', () => {
    renderWithRouter(
    <Game pokemons={pokemonDefaulObject} isFetched={false} />);
    const loading = screen.queryByRole('heading', {name: 'Loading...'});
    expect(loading).toBeInTheDocument();
  })
  test('Caso api responda "loading" não será renderizado', () => {
    <Game pokemons={pokemonDefaulObject} isFetched={true} />;
    const loading = screen.queryByRole('heading', {name: 'Loading...'});
    expect(loading).not.toBeInTheDocument();
  })
});
