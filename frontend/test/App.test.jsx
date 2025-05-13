import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';
import { BrowserRouter } from 'react-router-dom';
import StoreContextProvider from '../src/Context/StoreContext.jsx'; // remove destructuring

test('renders Navbar and Footer in App', async () => {
  render(
    <StoreContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreContextProvider>
  );

  // await instead of getBy for async rendering
  const logo = await screen.findByAltText(/swiftbites/i);
  expect(logo).toBeInTheDocument();

  const copyright = await screen.findByText(/copyright/i);
  expect(copyright).toBeInTheDocument();
});
