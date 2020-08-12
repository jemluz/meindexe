const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
var history = require('connect-history-api-fallback');
const port = process.env.PORT || 3000;


const app = express();
app.use(favicon(__dirname + '/dist/favicon.ico'));
// // the __dirname is the current directory from where the script is running

app.use(history({ verbose: true }));

// meindexe
app.use(express.static(__dirname + '/dist'));
app.use(express.static(path.join(__dirname + '/dist', 'build')));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist', 'build', 'index.html'));
});

// perguntas
app.use(express.static(__dirname + '/demo-perguntas/dist'));
app.use(express.static(path.join(__dirname + '/demo-perguntas/dist', 'demo-perguntas')));
app.get('/demo-perguntas', function (req, res) {
    res.sendFile(path.join(__dirname + '/demo-perguntas/dist', 'demo-perguntas', 'index.html'));
});

app.listen(port, () => {
    console.log('Backend rodando...');
}); 