import { screen } from "@testing-library/react";
import renderWithRouter from "../helpers/renderWithRouter";
import Game from '../components/Game';

describe("Testa funcionamento do app", () => {
  it('Titulo é renderizado corretamente', () => {
    renderWithRouter(<Game/>);
    const title = screen.getByRole('heading', {name: "Who is that Pokemon ?"});
    expect(title).toBeInTheDocument();
  });
});
