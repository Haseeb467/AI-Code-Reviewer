const express = require('express');
const aiRoutes = require('./routes/ai.routes')

const app = express()

app.get('/', (req, res) => {
    res.send("Helo World")
})

app.use('/', (req))


module.exports = app