import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from "../client/components/navbar"
import '@testing-library/jest-dom'

test('should render my component ', () => {
  const component = renderer.create(<Navbar value="Lorem ipsum" />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
