const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const projectRoutes = require("./app/routes/api");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Restrict header
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, Authorization"
	);
	if (req.method === "OPTIONS") {
		res.header("Access-Control-Allow-Methods", "POST, GET");
		return res.status(200).json({});
	}
	next();
});

// Use router for API definition
app.use("/", projectRoutes);

// Handle API calls that haven't been defined
app.use((req, res, next) => {
	const error = new Error("API call not supported");
	error.status = 404;
	next(error);
});
  
app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error: {
			// TODO: Generic error messages handler
			message: error.message
		}
	});
});
  
module.exports = app;
