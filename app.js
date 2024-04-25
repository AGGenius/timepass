const express = require('express');
const app = express();

const indexRoute = require('./routes/index');
const endRoute = require('./routes/endroute');
const horaMiddleware = require('./middlewares/horaMiddleware');
const validarHora = require('./middlewares/validarHora');

app.use('/endroute', validarHora, endRoute);
app.use('/', horaMiddleware, indexRoute);

app.listen(3000, function() { console.log(`The server is listening at port http://localhost:${this.address().port}`); } );