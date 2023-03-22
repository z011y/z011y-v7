const { context } = require('esbuild');
const { fork } = require('child_process');

let server;
let serverBuildCount = 0;

const serverPlugin = {
  name: 'server',
  setup(build) {
    build.onStart(() => {
      console.log('\x1b[33mWAIT\x1b[0m - building server...');
    });
    build.onEnd((result) => {
      if (result.errors.length === 0) {
        console.log(`\x1b[32mSUCCESS\x1b[0m - server build succeeded with ${result.warnings.length} warnings`)
        serverBuildCount++;
        startServer();
      } else {
        console.log(`\x1b[31mFAILURE\x1b[0m - server build failed with ${result.errors.length} errors`)
      }
    });
  }
}

const clientPlugin = {
  name: 'client',
  setup(build) {
    build.onStart(() => {
      console.log('\x1b[33mWAIT\x1b[0m - building client...');
    });
    build.onEnd((result) => {
      if (result.errors.length === 0) {
        console.log(`\x1b[32mSUCCESS\x1b[0m - client build succeeded with ${result.warnings.length} warnings`)
      } else {
        console.log(`\x1b[31mFAILURE\x1b[0m - client build failed with ${result.errors.length} errors`)
      }
    });
  },
};

const startServer = () => {
  if (serverBuildCount === 1) {
    console.log('\x1b[33mWAIT\x1b[0m - starting server...')
    server = fork('public/dist/server.js');
  } else {
    server.on('close', () => {
      console.log('\x1b[33mWAIT\x1b[0m - restarting server...');
      server = fork('public/dist/server.js');
    });
    server.kill();
  }
};

const serverContext = context({
  entryPoints: ['server/server.tsx'],
  outfile: 'public/dist/server.js',
  platform: 'node',
  bundle: true,
  plugins: [serverPlugin],
});

serverContext.then((serverResult) => {
  context({
    entryPoints: ['src/index.tsx'],
    outfile: 'public/dist/app.js',
    bundle: true,
    plugins: [clientPlugin],
  })
    .then((clientResult) => {
      serverResult.watch();
      clientResult.watch();
    })
});
