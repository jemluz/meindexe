const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 3000;


const app = express();
app.use(favicon(__dirname + '/dist/favicon.ico'));
// // the __dirname is the current directory from where the script is running

app.use(express.static(__dirname + '/dist'));
app.use(express.static(path.join(__dirname + '/dist', 'build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist', 'build', 'index.html'));
});

app.listen(port, () => {
    console.log('Backend rodando...');
}); 