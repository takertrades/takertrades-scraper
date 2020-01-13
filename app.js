const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/api', (req, res) => {
    res.send([1,2,3]);  
});

const port = process.env.PORT || 3002;
app.listen(port, () => console.log(`server started http://localhost:${port}`));