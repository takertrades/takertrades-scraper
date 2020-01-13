const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
    res.send('hello world');
});

// app.get('/api', (req, res) => {
//    var data;
//    fs.readFile("db.json", "utf8", function(err, data) {
//      if (err) throw err;
//      data = JSON.parse(data);
//    });
// });

const port = process.env.PORT || 3002;
app.listen(port, () => console.log(`server started http://localhost:${port}`)); 