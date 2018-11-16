
const http = require("http");
const app = require("./app");

const CONFIG = require("./config/local");

// Handle uncaught exception
// TODO: Use open source logger library to handle logs
process.addListener("uncaughtException", function (err) {
    console.log("Caught exception: " + err + "\n");
});

const server = http.createServer(app);

server.listen(CONFIG.PORT, CONFIG.HOST, () => {
    console.log("%s API v%s server started on %s:%d (Press CTRL+C to quit)",
                CONFIG.APP,
                CONFIG.VER_MAJOR + "." + CONFIG.VER_MINOR + "." + CONFIG.VER_BUILD,
                CONFIG.HOST,
                CONFIG.PORT);
});
