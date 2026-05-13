const express = require('express');
const app = express();
const path = require('path');

// Esto es lo que le faltaba para encontrar la carpeta 'public' sin errores
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('POR FIN FUNCIONA');
});
