
import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom'
import Breadcrumbs from "../client/components/breadcrumbs"

const list = [
  "Lorem ipsum dolor",
  "Lorem ipsum dolor",
  "Lorem ipsum dolor",
  "Lorem ipsum dolor",
  "Lorem ipsum dolor"
]


test('Bshould render my component', () => {
  const component = renderer.create(<Breadcrumbs breadcrumbsList={list} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
