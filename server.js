let express = require('express');
let path = require('path');
let serveStatic = require('serve-static');

let app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));

router.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

let port = process.env.PORT || 8000;
app.listen(port);
console.log('server started ' + port);
