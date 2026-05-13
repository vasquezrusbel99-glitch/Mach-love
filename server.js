const express = require('express');
const app = express();
const path = require('path');

// Esto le dice al PC que use la carpeta 'public' que ya creaste
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, '0.0.0.0', () => {
    console.log('✅ SERVIDOR ENCENDIDO');
    console.log('📱 En tu móvil pon: http://192.168.1.19:3000');
});