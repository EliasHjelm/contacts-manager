const express = require('express');

const app = express();

app.use(express.static('public'));

app.listen(3000, () => console.log('listneing on port 3000'));


