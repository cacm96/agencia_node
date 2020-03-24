//importar express
const express = require('express');
const path = require('path');
const routes = require('./routes');
const bodyParser = require('body-parser');

const configs = require('./config');



/*db.authenticate()
    .then(() => console.log('DB conectada'))
    .catch(error => console.log(error))*/

//configurar express
const app = express();

//habilitar pug
app.set('view engine', 'pug');

//añadir vistas
app.set('views', path.join(__dirname, '/views'));

//cargar carpeta estatica
app.use(express.static('public'));

//validar si estamos en desarrollo o produccion
const config = configs[app.get('env')];

//creamos la variable para el sitio
app.locals.titulo = config.nombresitio;

//muestra el año actual y genera la ruta
app.use((req, res, next) => {
    const fecha = new Date();
    res.locals.fechaActual = fecha.getFullYear();
    res.locals.ruta = req.path;
    return next();
});

//ejecutamos body parser
app.use(bodyParser.urlencoded({extended:true}));

//cargar rutas
app.use('/', routes());

//puerto y host para la app
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3005

app.listen(port, host, () => {
    console.log('el servidor esta corriendo');
});
