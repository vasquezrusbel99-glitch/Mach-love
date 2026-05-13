const express = require('express');
const path = require('path');
const app = express();

// Configura la carpeta pública para tus archivos HTML/CSS
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal que envía el archivo index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    

// Puerto de escucha para Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log('Servidor en marcha'});
});
