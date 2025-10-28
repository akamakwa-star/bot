// App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Bot Battlr heading', () => {
  render(<App />);
  const heading = screen.getByText(/Bot Battlr/i);
  expect(heading).toBeInTheDocument();
});
