import express from 'express';
import path from 'path';
// import fs from 'fs';
// import sha256 from 'sha256';

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.use(express.static('public'));

app.get('**', (req, res) => res.sendFile(path.resolve(__dirname, 'public/index.html')));
app.get('/speed', (req, res) => res.sendFile(path.resolve(__dirname, 'public/statistics.html')));

app.listen(port, () => console.log(`App listening on port ${port}`));
