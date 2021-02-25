import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ItemDescription from "../client/components/itemDescription"
import '@testing-library/jest-dom'

test('render ItemDescription text validate ', () => {
  render(<ItemDescription description={'Lorem ipsum'} />);
  const text = screen.getByText(/Lorem ipsum/i);
  const title = screen.getByText(/Descripción del producto/i);
  expect(text).toBeInTheDocument()
  expect(title).toBeInTheDocument()
});


test('render ItemDescription Snapshot', () => {
  const component = renderer.create(<ItemDescription description={'Lorem ipsum'} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
