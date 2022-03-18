import { screen } from "@testing-library/react";
import renderWithRouter from "../helpers/renderWithRouter";
import Game from '../components/Game';
import pokemonDefaulObject from '../helpers/Pokemons';
import userEvent from "@testing-library/user-event";

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
  describe('Fazendo teste do funcionamento de um jogo completo com sucesso', () => {
    test('Testando vitoria', () => {
      renderWithRouter(
        <Game pokemons={pokemonDefaulObject} isFetched={true} />
      )
      const submitButton = screen.getByRole("button", { value: "Submit" });
      const input = screen.queryByRole("textbox");
      userEvent.type(input, 'pikachu');
      userEvent.click(submitButton);
      userEvent.type(input, 'bulbasaur');
      userEvent.click(submitButton);
      const homeButton = screen.getByRole('button', {name: 'Home'});
      expect(homeButton).toBeInTheDocument()
      const victoryText = screen.getByRole('heading', {level: 5, name: /You Win!/});
      expect(victoryText).toBeInTheDocument();
    })
  })
});
