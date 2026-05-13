const express = require('express');
const app = express();
const path = require('path');

// Esto sirve la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

// Render asigna el puerto automáticamente
const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(✅ Servidor Mach Love listo en puerto ${PORT});
