const express = require('express')
const path = require('path')
const app = express()


app.use(express.static(path.resolve(
    __dirname,
    "./src/index.tsx"
)));

app.route('/auth').get(function(req,res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});