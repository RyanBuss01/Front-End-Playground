const express = require('express');
const routes = require('./routes/router.js');
const app = express();

var port = 3000;
var ip = 'localhost';

let server = app.listen(port, ip, () => console.log(`running at host ${ip} on port ${port}`));

app.use(routes);