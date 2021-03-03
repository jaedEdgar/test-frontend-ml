import React from 'react';
import renderer from 'react-test-renderer';
import Product from "../client/components/product"
import '@testing-library/jest-dom'
import { MemoryRouter as Router, withRouter } from 'react-router-dom'

const mock = {
  amount: "80999",
  city_name: "Rosario",
  decimals: 0,
  free_shipping: true,
  id: "MLA909240269",
  picture: "http://http2.mlstatic.com/D_998849-MLA44698052458_012021-I.jpg",
  title: "Xiaomi Poco X3 Dual Sim 64 Gb Out Of The Blue 6 Gb Ram",
}


it('will pass', () => {
  expect(
    renderer.create(<Router>
      <Product
        picture={mock.picture}
        title={mock.title}
        amount={mock.amount}
        decimals={mock.decimals}
        id={mock.id}
        city_name={mock.city_name}
        free_shipping={mock.free_shipping} />
    </Router>)
      .toJSON()
  ).toMatchSnapshot()
})