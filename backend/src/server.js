const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();

mongoose.connect(
  'mongodb+srv://user:userpass@mycluster-8vpzr.mongodb.net/aircnc?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// GET, POST, PUT, DELETE

//req.query = Acesso query parametros (filtros)
//req.params = Acesso route parametros (editar e apagar)
//req.body = Acesso body da requesição (para criar e editar)

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);
