import express from 'express';
// import path from 'path';
// import fs from 'fs';
// import sha256 from 'sha256';

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.use(express.static('public'));
// app.use(express.static(path.resolve(__dirname, 'node_modules')));

app.get('/', (req, res) => res.sendFile('public/index.html'));

app.listen(port, () => console.log(`App listening on port ${port}`));
