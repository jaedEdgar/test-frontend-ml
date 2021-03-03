import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Loader from "../client/components/loader"
import '@testing-library/jest-dom'

test('should render my component', () => {
  const component = renderer.create(<Loader />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
