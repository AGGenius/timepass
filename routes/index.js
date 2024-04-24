const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>      
        <h1>Bienvenido a mi web</h1>
        <p>La hora actual es: ${req.actualTime}</p>
        <span></span><button>Entrar</button>
        <script>
        
            const button = document.querySelector('button');
            const messageWrap = document.querySelector('span');

            button.addEventListener('click', () => {
                if(${req.isValid}) {
                    window.location.href = "/endroute";
                } 
                messageWrap.textContent = "${req.message}";
            });
        </script>
    </body>
    </html>
    `);
});

router.use((req, res) => {
    res.status(404).send(`
    <h1>Página no encontrada</h1>
    <a href="/">index</a>
    `);
});

module.exports = router;