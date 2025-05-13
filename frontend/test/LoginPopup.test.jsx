import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginPopup from '../src/components/LoginPopup/LoginPopup.jsx';
import { StoreContextProvider } from '../src/Context/StoreContext.jsx';

test('renders login popup with input fields', () => {
  render(
    <StoreContextProvider>
      <LoginPopup setShowLogin={() => {}} />
    </StoreContextProvider>
  );

  expect(screen.getByPlaceholderText(/your email/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
});
