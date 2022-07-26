const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Node working')
});

app.listen(port, () =>{
    console.log("Hello Node", port);
});