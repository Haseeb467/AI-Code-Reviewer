const express = require('express');

const app = express()

app.get('/', (req, res) => {
    res.send("Helo World")
})


module.export = app