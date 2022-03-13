import { render, screen } from '@testing-library/react';
import Header from './App';

test('renders learn react link', () => {
  render(<Header />);
  const linkElement = screen.getByText('Como Jogar');
  expect(linkElement).toBeInTheDocument();
});
