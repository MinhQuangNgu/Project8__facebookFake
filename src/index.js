const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const compression = require("compression");
const socket = require("socket.io");
const router = require("./api/routes/index");
const httpProxy = require("http-proxy");
const app = express();

const DOMAIN = "http://localhost:3000";
app.use(express.json());
app.use(
	cors({
		origin: DOMAIN,
	})
);
const proxy = httpProxy.createProxyServer({
	target: "http://api.localhost:5000",
	changeOrigin: true,
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(compression());
dotenv.config();
app.all("/api/*", (req, res) => {
	proxy.web(req, res);
});
proxy.on("error", (err, req, res) => {
	console.error("Proxy error:", err);
	res.status(500).send("Proxy error");
});
const http = require("http").createServer(app);
const io = new socket.Server(http, {
	cors: {
		origin: "*",
	},
});

io.on("connection", (socket) => {
	console.log("connection");
});
const PORT = process.env.PORT || 5000;
router(app);
http.listen(PORT, () => {
	console.log("Listening in port", PORT);
});
