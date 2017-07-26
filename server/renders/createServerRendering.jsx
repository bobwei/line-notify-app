import express from 'express';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import StaticRouter from 'react-router-dom/StaticRouter';
import withProps from 'recompose/withProps';

import HTML from '../../src/html';
import getPublicEnv from '../../src/modules/env/selectors/getPublicEnv';
import configureStore from '../../src/modules/stores/configureStore';
import Root from '../../build/server/modules/ui/components/Root';

const createServerRendering = () => {
  const app = express();
  const env = getPublicEnv(process.env);

  app.get('*', (req, res) => {
    const store = configureStore();
    const context = {};
    const Router = withProps({ location: req.url, context })(StaticRouter);
    const serverRenderingBody = renderToStaticMarkup(
      <Root store={store} Router={Router} />,
    );
    if (context.url) {
      res.redirect(301, context.url);
      return;
    }
    const html = renderToStaticMarkup(
      <HTML serverRenderingBody={serverRenderingBody} env={env} />,
    );
    res.send(`<!doctype html>${html}`);
  });

  return app;
};

export default createServerRendering;
