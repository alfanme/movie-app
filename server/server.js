const express = require('express');
const path = require('path');
const cors = require('cors');
const movies = require('./movies_metadata.json');

const app = express();

app.use(cors());

// A test route to make sure the server is up.
app.get('/api/ping', (request, response) => {
    console.log('❇️ Received GET request to /api/ping');
    response.send('pong!');
});

// A mock route to return some data.
app.get('/api/movies', (request, response) => {
    console.log('❇️ Received GET request to /api/movies');

    if (!movies) response.status(404).json({ data: null });

    response.status(200).json({ data: movies });
});

app.get('/api/movies/:id', (request, response) => {
    const id = Number(request.params.id);
    console.log(`❇️ Received GET request to /api/movies/${id}`);

    const movie = movies.find(movie => movie.id === id) ?? null;

    if (!movie) response.status(404).json({ data: null });

    response.status(200).json({ data: movie });
});

// Express port-switching logic
let port;
console.log('❇️ NODE_ENV is', process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
    port = process.env.PORT || 3000;
    app.use(express.static(path.join(__dirname, '../build')));
    app.get('*', (request, response) => {
        response.sendFile(path.join(__dirname, '../build', 'index.html'));
    });
} else {
    port = 3001;
    console.log('⚠️ Not seeing your changes as you develop?');
    console.log(
        "⚠️ Do you need to set 'start': 'npm run development' in package.json?"
    );
}

// Start the listener!
const listener = app.listen(port, () => {
    console.log(
        '❇️ Express server is running on port',
        listener.address().port
    );
});
