import React from 'react';
import { render, screen } from '@testing-library/react';
import { RootPage } from './RootPage';
import '@testing-library/jest-dom/extend-expect';

test('should have title in RootPage component', () => {
  render(<RootPage />);
  const title = screen.getByText('Destinations');
  expect(title).toBeInTheDocument();
});

test('should have button in RootPage component', async () => {
  render(<RootPage />);
  const addButtonElement = screen.getByText('+ Ajouter');
  expect(addButtonElement).toBeInTheDocument();
});
