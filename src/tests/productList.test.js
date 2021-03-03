import React from 'react';
import renderer from 'react-test-renderer';
import ProductList from "../client/components/productList"
import '@testing-library/jest-dom'
import { MemoryRouter as Router, withRouter } from 'react-router-dom'

const mock = [
  {
    city_name: "Colegiales",
    condition: "new",
    free_shipping: true,
    id: "MLA908778425",
    picture: "http://http2.mlstatic.com/D_771888-MLA43752069008_102020-I.jpg",
    price: {
      amount: "224990",
      currency: "ARS",
      decimals: 0
    },
    title: "Asus Rog Phone 3 Zs661ks Dual Sim 256 Gb Negro Brillante 12 Gb Ram"
  }, {
    city_name: "Colegiales",
    condition: "new",
    free_shipping: true,
    id: "MLA908778425",
    picture: "http://http2.mlstatic.com/D_771888-MLA43752069008_102020-I.jpg",
    price: {
      amount: "224990",
      currency: "ARS",
      decimals: 0
    },
    title: "Asus Rog Phone 3 Zs661ks Dual Sim 256 Gb Negro Brillante 12 Gb Ram"
  }
]




it('will pass', () => {
  expect(
    renderer.create(<Router>
      <ProductList products={mock} />
    </Router>)
      .toJSON()
  ).toMatchSnapshot()
})