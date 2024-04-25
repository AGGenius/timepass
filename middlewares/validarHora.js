const validateTime = (req, res, next) => {
    const now = new Date();
    const actualHour = now.getHours();
    const minHour = 12;

    res.locals.mensaje = "Aún no es la hora, espera a las 12:00 para poder entrar. "

    if(actualHour >= minHour){  
        next();
    } else {
        res.redirect("/?mensaje=" + encodeURIComponent(res.locals.mensaje));
    }
};

module.exports = validateTime;