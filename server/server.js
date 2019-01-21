const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo app'
    });
});

app.get('/users', (req, res) => {
    res.send([
        {
            name: 'John Doe',
            age: 26
        },
        {
            name: 'Jane Doe',
            age: 21
        },
        {
            name: 'Nike Doe',
            age: 22
        },
        {
            name: 'Sam Doe',
            age: 19
        }
    ])
});

app.listen(3000, () => {
    console.log('Server is running');
});

module.exports = {
    app
}