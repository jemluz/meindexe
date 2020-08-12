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
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.use('/demos', express.static(path.join(__dirname, '/demos')))
app.use('/demos/perguntas', express.static(path.join(__dirname, '/demos/perguntas')))

app.get('/demos/perguntas', (req, res) => {
    res.sendFile(path.join(__dirname + '/demos/perguntas/index.html'))
  })

app.listen(port, () => {
    console.log('Backend rodando...');
}); 