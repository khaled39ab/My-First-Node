const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello nodemon')
});

const users = [
    { "id": 1, "name": "Akram", "job": "Cricketer", "email": "akram@gmail.com" },
    { "id": 2, "name": "Ikram", "job": "Cricketer", "email": "Ikram@gmail.com" },
    { "id": 3, "name": "Andre", "job": "Cricketer", "email": "Andre@gmail.com" },
    { "id": 4, "name": "Sndre", "job": "Cricketer", "email": "sndre@gmail.com" },
    { "id": 5, "name": "Jamil", "job": "Cricketer", "email": "Jamil@gmail.com" },
    { "id": 6, "name": "Jolil", "job": "Cricketer", "email": "Jolil@gmail.com" }
]
app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user =>user.name.toLowerCase().includes(search));
        res.send(matched);

    }
    else {
        res.send(users);
    }
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user)
});

app.post('/user', (req, res) => {
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
});

app.listen(port, () => {
    console.log('Listening to port', port);
});