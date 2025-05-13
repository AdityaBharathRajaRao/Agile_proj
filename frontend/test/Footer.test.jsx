import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../src/components/Footer/Footer.jsx';

test('renders footer content', () => {
  render(<Footer />);
  expect(screen.getByText(/get in touch/i)).toBeInTheDocument();
  expect(screen.getByText(/company/i)).toBeInTheDocument();
});

