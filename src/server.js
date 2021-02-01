import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';

import Base from './frontend/components/Base';
import App from './frontend/App';

const app = express();
const PORT = 3000;
app.use(express.static(path.join(__dirname)));

app.get('*', async (req, res) => {
  const scripts = ['/vendor.js', '/client.js'];

  const appMarkup = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={{}}>
      <App url={req.url} />
    </StaticRouter>
  );

  const html = ReactDOMServer.renderToStaticMarkup(
    <Base children={appMarkup} scripts={scripts} />
  );

  res.send(`<!doctype html>${html}`);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
