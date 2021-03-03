import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ProductDescription from "../client/components/productDescription"
import '@testing-library/jest-dom'

test('render ItemDescription text validate ', () => {
  render(<ProductDescription description={'Lorem ipsum'} />);
  const text = screen.getByText(/Lorem ipsum/i);
  const title = screen.getByText(/Descripción del producto/i);
  expect(text).toBeInTheDocument()
  expect(title).toBeInTheDocument()
});


test('should render my component', () => {
  const component = renderer.create(<ProductDescription description={'Lorem ipsum'} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
