const express = require('express');
const app = express();

// AHORA SÍ: Comilla abierta y comilla cerrada
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Mach Love funcionando al 100');
});
