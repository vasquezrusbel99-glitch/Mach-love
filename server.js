const express = require('express');
const path = require('path');
const app = express();

// Obligamos al servidor a que use la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

// Si alguien entra a la raíz, le mandamos el index.html sí o sí
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Servidor Mach Love a tope');
});
