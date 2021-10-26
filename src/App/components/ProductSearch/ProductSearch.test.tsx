import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductSearch from './ProductSearch';

describe('<ProductSearch />', () => {
  test('it should mount', () => {
    render(<ProductSearch />);
    
    const productSearch = screen.getByTestId('ProductSearch');

    expect(productSearch).toBeInTheDocument();
  });
});