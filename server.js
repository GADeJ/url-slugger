
const express = require("express");
const app = express();
const router = express.Router();

const HOST = process.env.URL_SLUG_HOST || 'http://localhost'
const PORT = process.env.URL_SLUG_SERVER_PORT || 3000;

process.addListener('uncaughtException', function (err, stack) {
    console.log('Caught exception: ' + err + '\n' + err.stack);
});

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
// });

router.get('/', function (req, res, next) {
    res.send('Welcome to the Kushy API');
});

// Configure routes
// routes(api);

app.post('/', (req, res, next) => {
	con.query('SELECT * FROM visit', (error, results, fields) => {
		if (error) throw error;
		res.send(JSON.stringify({"status_": 200, "error": null, "response": results}));
	});
});

app.get('/:slug', (req, res, next) => {
	con.query('SELECT * FROM slug', (error, results, fields) => {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});

app.listen(PORT, () => {
    console.log('Server started on %s:%d (Press CTRL+C to quit)', HOST, PORT);
});
