const express = require('express');
const 

const app = express()

app.get('/', (req, res) => {
    res.send("Helo World")
})


module.exports = app