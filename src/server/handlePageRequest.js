import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router';

import Base from '../client/components/Base';
import Routes from '../client/Routes';

const scripts = ['/vendor.js', '/client.js'];

export default async ({ url }, res) => {
	const appMarkup = renderToString(
		<StaticRouter location={url}>
			<Routes url={url} />
		</StaticRouter>
	);

	const html = renderToStaticMarkup(
		<Base children={appMarkup} scripts={scripts} />
	);

	res.send(`<!doctype html>${html}`);
};
