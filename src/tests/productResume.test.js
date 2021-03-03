import React from 'react';
import renderer from 'react-test-renderer';
import ProductResume from "../client/components/productResume"
import '@testing-library/jest-dom'

const mock = {
  item: {
    condition: "new",
    description: "Pensado para vos↵El Nokia 23 M posee el novedoso sistema operativo Android 10 que incorpora respuestas inteligentes y acciones sugeridas para todas tus aplicaciones. Entre sus diversas funcionalidades encontrarás el tema oscuro, navegación por gestos y modo sin distracciones, para que completes tus tareas mientras disfrutás al máximo tu dispositivo.↵↵Doble cámara y más detalles↵Sus 2 cámaras traseras de 13 Mpx/2 Mpx te permitirán tomar imágenes con más detalles y lograr efectos únicos como el famoso modo retrato de poca profundidad de campo.↵↵Además, el dispositivo cuenta con cámara frontal de 5 Mpx para que puedas sacarte divertidas selfies o hacer videollamadas.↵↵Reconocimiento facial para mayor seguridad↵Acercá el dispositivo a tu rostro para desbloquearlo instantáneamente. Su precisa tecnología de reconocimiento facial te garantiza un acceso al equipo rápido y seguro. ↵↵Batería superior↵¡Desenchufate! Con la súper batería de 4000 mAh tendrás energía por mucho más tiempo para jugar, ver series o trabajar sin necesidad de recargar tu teléfono.↵↵El espacio que necesitás↵Con su memoria interna de 32 GB descargá tus aplicaciones favoritas y guardá todas las fotos y videos que quieras.",
    free_shipping: true,
    id: "MLA904399939",
    picture: {
      id: "828063-MLA44280741156_122020",
      max_size: "528x1059",
      quality: "",
      secure_url: "https://http2.mlstatic.com/D_828063-MLA44280741156_122020-O.jpg",
      size: "249x500",
      url: "http://http2.mlstatic.com/D_828063-MLA44280741156_122020-O.jpg"
    },
    price: {
      currency: "ARS",
      amount: "16999",
      decimals: 0
    },
    sold_quantity: 500,
    title: "Nokia 23 M 32 Gb Gris Carbón 2 Gb Ram",
  }
}

test('should render my component', () => {
  const component = renderer.create(< ProductResume data={mock} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});