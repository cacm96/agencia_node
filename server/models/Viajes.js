const Sequelize = require('sequelize');
const db = require('../config/database');

const Viaje = db.define('viaje', {
    name: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.STRING
    },
    date_departure: {
        type: Sequelize.DATE
    },
    date_arrival: {
        type: Sequelize.DATE
    },
    image: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    seats: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.STRING
    }
});

module.exports = Viaje;