import React from 'react';
import renderer from 'react-test-renderer';
import Home from "../client/pages/Home"
import '@testing-library/jest-dom'

test('should render my component', () => {
  const component = renderer.create(<Home />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
