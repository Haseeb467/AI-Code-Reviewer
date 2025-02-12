const express = require('express');
const aiRoutes = require('./routes/ai.routes')

const app = express()
app.use

app.get('/', (req, res) => {
    res.send("Helo World")
})

app.use('/ai', aiRoutes) 


module.exports = app