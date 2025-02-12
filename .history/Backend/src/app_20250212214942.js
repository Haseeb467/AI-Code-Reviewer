const express = require('express');
const aiRoutes = require('./routes/ai.routes')

const app = express()

app.get('/', (req, res) => {
    res.send("Helo World")
})

app.use('/ai', aiRoutesnpx nodem) 


module.exports = app