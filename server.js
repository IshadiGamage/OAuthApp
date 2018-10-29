const express = require('express');
var path = require('path');
const ControllerRoute = require('./controller/controller');
const app = express();
const port = 3000;

app.use('/controller', ControllerRoute);


// viewed at http://localhost:3000
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/view/index.html'));
});

//route to the call back form where the token URL is retreived
app.get('/callBack', function (req, res) {
    res.sendFile(__dirname + '/view/callBack.html')
});

//route of the form that the data is displayed
app.get('/app/data', function (req, res) {
    res.sendFile(__dirname + '/view/data.html');
});

app.listen(port, () => console.log(`OAuth app listening on port ${port}!`));