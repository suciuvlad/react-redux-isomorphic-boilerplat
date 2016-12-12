import path from 'path';

import React from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../../webpack.config';

import { RouterContext, match } from 'react-router';
import { Provider } from 'react-redux';

import configureStore from '../common/configure-store';
import routes from '../common/routes';

const app = express();
app.use(express.static(path.resolve(__dirname, '../../dist')))

// Run Webpack dev server in development mode
if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
  }));
}


const renderFullPage = (html, initialState) => {
  const assetsManifest
    = process.env.webpackAssets && JSON.parse(process.env.webpackAssets)

  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Isomorphic Redux Example</title>
        ${process.env.NODE_ENV === 'production' ? `<link rel='stylesheet' href='${assetsManifest['/main.css']}' />` : ''}
      </head>

      <body>
        <div class="js-reactApp">${process.env.NODE_ENV === 'production' ? html : `<div>${html}</div>`}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}; 
        </script>
        <script src='${process.env.NODE_ENV === 'production' ? assetsManifest['/main.js'] : 'application.js'}'></script
      </body>
    </html>
  `;
}

app.use((req, res, next) => {
  match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
    if (err) {
      return res.status(500).end(renderError(err));
    }

    if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    }

    if (!renderProps) {
      return next();
    }

    const initialView = renderToString(
      <RouterContext {...renderProps} />
    );

    res
      .set('Content-Type', 'text/html')
      .status(200)
      .end(renderFullPage(initialView, {}));

  //   const store = configureStore();

  //   return fetchComponentData(store, renderProps.components, renderProps.params)
  //     .then(() => {
  //       const initialView = renderToString(
  //         <Provider store={store}>
  //           <IntlWrapper>
  //             <RouterContext {...renderProps} />
  //           </IntlWrapper>
  //         </Provider>
  //       );
  //       const finalState = store.getState();

  //       res
  //         .set('Content-Type', 'text/html')
  //         .status(200)
  //         .end(renderFullPage(initialView, finalState));
  //     })
  //     .catch((error) => next(error));
  });
});

app.listen(5000, (error) => {
  if (!error) {
    console.log(`IsomorphicApp is running on port: 5000! Build something amazing!`);
  }
});

export default app;
