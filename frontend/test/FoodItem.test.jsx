import React from 'react';
import { render, screen } from '@testing-library/react';
import FoodItem from '../src/components/FoodItem/FoodItem.jsx';
import { StoreContextProvider } from '../src/Context/StoreContext.jsx';

test('renders food item details', () => {
  render(
    <StoreContextProvider>
      <FoodItem
        id="1"
        image="test.jpg"
        name="Test Food"
        price={99}
        desc="Delicious food"
      />
    </StoreContextProvider>
  );

  expect(screen.getByText(/test food/i)).toBeInTheDocument();
  expect(screen.getByText(/delicious food/i)).toBeInTheDocument();
  expect(screen.getByText(/99/i)).toBeInTheDocument();
});
