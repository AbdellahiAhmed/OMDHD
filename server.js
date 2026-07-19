/**
 * Passenger/cPanel Node.js App entrypoint. cPanel's Node selector runs this
 * file directly (not `npm start`), and provides the listen port via PORT.
 */
const next = require('next');

const app = next({ dev: false, dir: __dirname });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  require('http')
    .createServer((req, res) => handle(req, res))
    .listen(process.env.PORT || 3000, () => {
      console.log(`OMDHD ready on port ${process.env.PORT || 3000}`);
    });
});
