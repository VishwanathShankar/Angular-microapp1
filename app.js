var express = require('express');
var app = express();

app.use('/', express.static('dist/microapp1'));

app.listen(3001);
