const Testimonial = require('../models/Testimoniales');

exports.consultaTestimoniales = async (req, res) => {
    const testimoniales = await Testimonial.findAll()
    res.render('testimoniales', {
        pagina: 'Testimoniales',
        testimoniales
    });
}

exports.crearTestimoniales = async (req, res) => {
    //validar que todos los campos esten llenos
    let {name, email, message} = req.body;
    let errores = [];

    if(!name) {
        errores.push({'mensaje' : 'Agrega tu nombre'})
    }
    if(!email) {
        errores.push({'mensaje' : 'Agrega tu correo electrónico'})
    }
    if(!message) {
        errores.push({'mensaje' : 'Agrega tu mensaje'})
    }

    //revisar por errores
    if(errores.length > 0) {
        //muestra vista con errores
        const testimoniales = await Testimonial.findAll()
        res.render('testimoniales', {
            errores,
            name,
            email,
            message,
            status, 
            pagina: 'Testimoniales',
            testimoniales
        })
    } else {
        //muestra vista sin errores, almacenar en DB
        Testimonial.create({
            name,
            email,
            message,
            status:'A'
        })
        .then(testimonial => res.redirect('./testimoniales'))
        .catch(error => console.log(error))
    }
    
}