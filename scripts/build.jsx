#!/usr/bin/env babel-node
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import dotenv from 'dotenv';

import HTML from '../src/html';
import envSelector from '../src/modules/envs/selectors';

dotenv.config();

const envs = envSelector(process.env);

console.log(`<!doctype html>${renderToStaticMarkup(
  <HTML
    envs={envs}
    jsSrc={'assets/app.js'}
    cssSrc={'assets/main.css'}
  />,
)}`);
