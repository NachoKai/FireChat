let express = require('express');
let path = require('path');
let serveStatic = require('serve-static');
let PORT = process.env.PORT || 3000;

let app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));

app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, function() {
	console.log(`Server is running on port ${PORT}`);
});
