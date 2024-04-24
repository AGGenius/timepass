const validateTime = (req, res, next) => {
    const now = new Date();
    const actualHour = now.getHours();
    const minHour = 12;

    if (req._parsedUrl.path === "/") {
        if(actualHour >= minHour){  
            req.isValid = true;
            req.message = "";
        } else {
            req.isValid = false;
            req.message = "Aún no es la hora, tienes que esperar hasta las 12:00. ";
        }
    
        next();
    } else if (req._parsedUrl.path === "/endroute") {
        if(actualHour >= minHour){  
            next();
        } else {
            //res.redirect("/");
            req.isValid = false;
            req.message = "Aún no es la hora, tienes que esperar hasta las 12:00. ";
            return;
        }
    }
};

module.exports = validateTime;