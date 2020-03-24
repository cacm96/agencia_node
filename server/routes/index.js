const express = require('express');
const router = express.Router();

//Controladores
const nosotrosController = require('../controllers/nosotrosController');
const homeController = require('../controllers/homeController');
const viajeController = require('../controllers/viajesController');
const testimonialesController = require('../controllers/testimonialesController');

module.exports = function() {
    router.get('/', homeController.consultasHomepage);
    router.get('/nosotros', nosotrosController.infoNosotros);
    router.get('/viajes', viajeController.consultaViajes);
    router.get('/viajes/:id', viajeController.consultaViaje);
    router.get('/testimoniales', testimonialesController.consultaTestimoniales);
    //cuando se llena el formulario
    router.post('/testimoniales', testimonialesController.crearTestimoniales);
    return router;
}