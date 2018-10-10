
// //route to index.html upon loading
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname,'index.html'));
// });
const express = require('express')
var path = require('path');
const app = express()
const port = 3000

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
//
// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))