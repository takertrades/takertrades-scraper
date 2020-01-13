const express = require('express');
const fs = require('fs');
const app = express();

var db = require('./db.json')

app.get('/api', (req, res) => {
    res.json(db);
});

app.get("/", (req, res) => {
  res.send("<h1>Server is running</h1>");
});

 
const port = 80;
app.listen(port, () => console.log(`server started http://localhost:${port}`)); 