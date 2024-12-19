require('./settings');
const express = require('express'); 
const app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var favicon = require('serve-favicon');
var createError = require('http-errors');
var { color } = require('./lib/color');
var cors = require('cors');
var secure = require('ssl-express-www');

const PORT = process.env.PORT || 8080 || 5000 || 3000;

// Image title (ensure favicon exists at the given path)
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

var main = require('./routes/main');
var api = require('./routes/api');

app.set('trust proxy', true);
app.set('json spaces', 2);
app.use(cors());
app.use(secure);
app.use(cookieParser());
app.use(express.static('public'));
app.use('/', main);
app.use('/api', api);

// Handle 404 errors
app.use(function (req, res, next) {
	next(createError(404));
});

// Handle other errors
app.use(function (err, req, res, next) {
	res.status(err.status || 500);
	res.sendFile(path.join(__dirname, 'view', '404.html'));
});

// Start the server
app.listen(PORT, () => {
	console.log(color("<=====[ INFORMASI PENTING ]=====>\n", 'yellow'));
	console.log(color("> Rest API ini dibuat oleh ``DhaniOfficiall``", 'white'));
	console.log(color("> Buy rest API no pasaran bisa beli di DhaniOfficiall,", 'white'));
	console.log(color("> Whatsapp :", "red"), color("\n › no : 62851-7421-7900\n › link : https://wa.me/6285174217900", 'white'));
	console.log(color("> Instagram :", "red"), color("\n › name : @dhaniofficiall_\n › link : https://instagram.com/dhaniofficiall_", 'white'));
	console.log(color("\n<=====[ AKHIR INFORMASI PENTING ]=====>\n", 'yellow'));
	console.log(color("<=====[ START HOSTING ]=====>", 'red'));
	console.log(color("Server running on port " + PORT, 'white'));
});

module.exports = app;
