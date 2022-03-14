import { screen } from "@testing-library/react";
import renderWithRouter from "../helpers/renderWithRouter";
import App from "../App";

describe("Testa funcionamento do app", () => {
  it('Titulo é renderizado corretamente', () => {
    renderWithRouter(<App/>);
    const title = screen.getByRole('heading', {name: "Quem é esse Pokémon ?"});
    expect(title).toBeInTheDocument();
  })

  it('Botão começar é renderizado corretamente', () => {
    renderWithRouter(<App/>);
    const startButton = screen.getByRole('button', {name: 'Começar'});
    expect(startButton).toBeInTheDocument();
  })
});
