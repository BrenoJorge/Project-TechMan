require('dotenv').config();
const PORT = process.env.PORT || 3000
const express = require('express');
const cors = require('cors');

const app = express();

const usuarios = require('./src/routes/usuarios')
const perfis = require('./src/routes/perfis')
const equipamentos = require('./src/routes/equipamentos')
const comentarios = require('./src/routes/comentarios')

let corsOptions = {
    origin: [
        'http://127.0.0.1:5500',
        'http://localhost:5500',
    ],
    methods: "GET,PUT,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(usuarios);
app.use(perfis);
app.use(equipamentos);
app.use(comentarios);

app.listen(PORT, () => {
    console.log('Servidor em execução na porta ' + PORT);
});