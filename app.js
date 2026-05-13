const express = require('express');
const path = require('path');
const app = express();

// Configuración para servir los archivos de la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal para cargar el index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// El puerto que usa Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log('Servidor activo en puerto ' + PORT);
});
