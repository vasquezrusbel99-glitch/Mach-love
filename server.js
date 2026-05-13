const express = require('express');
const express = require('express');
const app = express();

// Usamos la carpeta public directamente
app.use(express.static('public'));

// Puerto automático para Render
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Servidor Mach Love funcionando');
});
