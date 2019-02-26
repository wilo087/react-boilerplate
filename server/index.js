
import path from 'path';
import express from 'express';
// import fs from 'fs';

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.static(path.resolve(__dirname, 'node_modules')));

app.get('**', (req, res) => {
  res.send('hello world');
});

app.listen(port, () => console.log(`App listening on port ${port}`));
