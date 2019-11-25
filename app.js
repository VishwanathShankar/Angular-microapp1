var express = require('express');
var app = express();
var PORT = 3001
app.use('/', express.static('dist/microapp1'));

app.listen(PORT);
console.log("Microapp1 is running on port "+PORT);
