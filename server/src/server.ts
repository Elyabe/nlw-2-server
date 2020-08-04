import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    const users = [
        { name: 'Elyabe', age: 51},
        { name: 'Elyabe', age: 51},
    ]
    return response.json(users);
})


app.listen(3333);

