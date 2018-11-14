
const http = require('http');
const app = require('./app');

const HOST = process.env.URL_SLUG_HOST || 'http://localhost'
const PORT = process.env.URL_SLUG_SERVER_PORT || 3000;

process.addListener('uncaughtException', function (err, stack) {
    console.log('Caught exception: ' + err + '\n' + err.stack);
});

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log('Server started on %s:%d (Press CTRL+C to quit)', HOST, PORT);
});
