const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Node working')
});

const users = [
    { id: 1, name: 'Polton', zip: 1000, dis: 'Dhaka' },
    { id: 2, name: 'Shahbag', zip: 1217, dis: 'Dhaka' },
    { id: 3, name: 'Dhanmondi', zip: 1209, dis: 'Dhaka' },
    { id: 4, name: 'Ramna', zip: 1217, dis: 'Dhaka' },
    { id: 5, name: 'Motijheel', zip: 1222, dis: 'Dhaka' },
    { id: 6, name: 'Gulshan', zip: 1212, dis: 'Dhaka' },
    { id: 7, name: 'Mirpur', zip: 1218, dis: 'Dhaka' }
];

app.get('/users', (req, res) => {
    res.send(users);
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id)
    res.send(user);
})

app.listen(port, () => {
    console.log("Hello Node", port);
});