const express = require('express');
const app = express();
const path = require('path');

// Esto le dice al servidor que busque tus archivos en la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Servidor Mach Love listo');
});
