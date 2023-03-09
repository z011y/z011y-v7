const { context } = require('esbuild');
const { fork } = require('child_process');

let server;
let serverBuild;

const servePlugin = {
  name: 'serve',
  setup(build) {
    build.onStart(() => {
      console.log('⚡️ building client...');
    });
    build.onEnd(() => {
      restartServer();
    });
  },
};

const restartServer = () => {
  console.log('⚡️ building server...');
  serverBuild
    .rebuild()
    .then(() => {
      server.on('close', () => {
        console.log('🔄 starting server...');
        server = fork('public/dist/server.js');
      });
      server.kill();
    })
    .catch(() => {
      server.kill();
      process.exit(1);
    });
};

const serverContext = context({
  entryPoints: ['server.tsx'],
  outfile: 'public/dist/server.js',
  platform: 'node',
  bundle: true,
});

serverContext.then((serverResult) => {
  server = fork('public/dist/server.js');
  context({
    entryPoints: ['src/index.tsx'],
    outfile: 'public/dist/app.js',
    bundle: true,
    plugins: [servePlugin],
  })
    .then((clientResult) => {
      serverBuild = serverResult;
      clientResult.watch();
    })
    .catch(() => {
      server.kill();
      process.exit(1);
    });
});
