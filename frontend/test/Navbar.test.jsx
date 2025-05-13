import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../src/components/Navbar/Navbar.jsx';
import { BrowserRouter } from 'react-router-dom';
import { StoreContextProvider } from '../src/Context/StoreContext.jsx';

test('renders Navbar with sign in button', () => {
  render(
    <StoreContextProvider>
      <BrowserRouter>
        <Navbar setShowLogin={() => {}} />
      </BrowserRouter>
    </StoreContextProvider>
  );

  expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
});
