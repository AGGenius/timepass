const express = require('express');
const app = express();

const indexRoute = require('./routes/index');
const endRoute = require('./routes/endroute');
const horaMiddleware = require('./middlewares/horaMiddleware');
const validarHora = require('./middlewares/validarHora');

app.use(validarHora, horaMiddleware);
app.use('/endroute', endRoute);
app.use('/', indexRoute);

app.listen(3000, function() {
    console.log(`The server is listening at port http://localhost:${this.address().port}`);
})