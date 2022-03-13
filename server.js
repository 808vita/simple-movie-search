const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const path = require("path");
const port = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "production") {
	app.use(express.static(__dirname));
	app.use(express.static(path.join(__dirname, "build")));

	app.get("/*", function (req, res) {
		res.sendFile(path.join(__dirname, "build", "index.html"));
	});
}
app.listen(port, console.log(`port ${port}`));
