const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Node working')
});

const users = [
    { id: 1, name: 'Polton', zip: 1000, email: 'dhaka1000@gmail.com' },
    { id: 2, name: 'Shahbag', zip: 1217, email: 'dhaka1217@gmail.com' },
    { id: 3, name: 'Dhanmondi', zip: 1209, email: 'dhaka1209@gmail.com' },
    { id: 4, name: 'Ramna', zip: 1217, email: 'dhaka1217@gmail.com' },
    { id: 5, name: 'Motijheel', zip: 1222, email: 'dhaka1222@gmail.com' },
    { id: 6, name: 'Gulshan', zip: 1212, email: 'dhaka1212@gmail.com' },
    { id: 7, name: 'Mirpur', zip: 1218, email: 'dhaka1218@gmail.com' }
];

app.get('/users', (req, res) => {
    res.send(users);
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id)
    res.send(user);
});

app.post('/user', (req, res) =>{
    // console.log(req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user)
});

app.listen(port, () => {
    console.log("Hello Node", port);
});