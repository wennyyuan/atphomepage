const express = require('express');
const app = express();
app.use(express.static('./public'));
app.listen('4000', () => {
    console.log('http://127.0.0.1:4000/index.html');
});