import React, { createElement } from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router';

import Base from '../client/components/Base';
import Routes from '../client/Routes';


export default (async ({ url }, res) => {
	const scripts = ['/vendor.js', '/client.js'];
	const routes = createElement(Routes, { url: url })
	const staticRouter = createElement(StaticRouter, { location: url }, routes)
	const appMarkup = renderToString(staticRouter);
	const base = createElement(Base, { children: appMarkup, scripts: scripts })
	const html = renderToStaticMarkup(base);
	const response = `<!doctype html>${html}`

	res.send(response);
});