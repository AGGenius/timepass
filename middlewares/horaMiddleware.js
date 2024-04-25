const getTime = (req, res, next) => {
    const now = new Date();

    req.actualTime  = `${format(now.getHours())}:${format(now.getMinutes())}:${format(now.getSeconds())}`;

    function format(val) {return val.toString().padStart(2, '0')};

    next();
};

module.exports = getTime;