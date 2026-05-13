const express = require('express');
const app = express();

// ESTO ES LO ÚNICO QUE NECESITAS:
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Mach Love está vivo');
});
