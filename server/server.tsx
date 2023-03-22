'use strict';

import express from 'express';
import { renderToPipeableStream } from 'react-dom/server';

import App from 'src/app';

const app = express();

app.use(express.static('public/dist'));

app.get('*', (req, res) => {
  const { pipe } = renderToPipeableStream(<App initialPath={req.path} />, {
    bootstrapScripts: ['/app.js'],
    onShellReady() {
      res.setHeader('content-type', 'text/html');
      pipe(res);
    },
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`\x1b[32mSUCCESS\x1b[0m - server is listening on port ${PORT}`);
});
