const express = require('express');
const app = express();
const path = require('path');

// Esto hace que cargue tu index.html automáticamente
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Servidor listo');
