
const http = require("http");
const app = require("./app");

const CONFIG = require("./config/local")

// Handle uncaught exception
// TODO: Use open source logger library to handle logs
process.addListener('uncaughtException', function (err, stack) {
    console.log('Caught exception: ' + err + '\n' + err.stack);
});

const server = http.createServer(app);

server.listen(CONFIG.PORT, () => {
    console.log('Server started on %s:%d (Press CTRL+C to quit)', CONFIG.HOST, CONFIG.PORT);
});
