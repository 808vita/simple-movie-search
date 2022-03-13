const express = require("express");
const dotenv = require("dotenv");
const axios = require("axios");
const cors = require("cors");

dotenv.config();

const path = require("path");
const port = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/discover", async (req, res) => {
	axios
		.get(
			`https://api.themoviedb.org/3/search/movie?&api_key=${process.env.REACT_APP_API_KEY}&query=spiderman`
		)
		.then((response) => {
			res.json(response.data);
		})
		.catch((error) => {
			console.log(error);
		});
});

app.get("/api/search/:searchterm", async (req, res) => {
	axios
		.get(
			`https://api.themoviedb.org/3/search/movie?&api_key=${process.env.REACT_APP_API_KEY}&query=${req.params.searchterm}`
		)
		.then((response) => {
			res.json(response.data);
		})
		.catch((error) => {
			console.log(error);
		});
});

if (process.env.NODE_ENV === "production") {
	app.use(express.static(__dirname));
	app.use(express.static(path.join(__dirname, "build")));

	app.get("/*", function (req, res) {
		res.sendFile(path.join(__dirname, "build", "index.html"));
	});
}
app.listen(port, console.log(`port ${port}`));
