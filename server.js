const express = require('express');
const path = require('path');
const app = express();

// Servir la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

// FORZAR la carga del index.html en la raíz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log('SERVIDOR ARRANCADO');
});
