const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const morgan = require('morgan');
const chalk = require('chalk');
const path = require('path');
const http = require('http');
const server = http.createServer();

const port = process.env.PORT || 1337


server.on('request', app);

const PATHS = {
	indexHTML: path.join(__dirname, '../public/index.html'),
	public: path.join(__dirname, '../public')
};

app
	.use(express.static('public'))
	.use(bodyParser.urlencoded({ extended: true}))
	.use(bodyParser.json())
	.use(morgan('dev'))

app.get('/*', (req,res) => {
	res.sendFile(PATHS.indexHTML);
});

app.use((err, req, res, next) => {
	if (process.env.NODE_ENV !== 'testing') {
		console.error(chalk.red(err));
		console.error(chalk.red(err.stack));
	}
	res.status(err.status || 500).send(err.message || 'Internal Error');
});

server.listen(port, () => {
	console.log('Server listening on port ' + port);
});
