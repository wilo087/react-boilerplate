import path from 'path';
import express from 'express';
import fs from 'fs';
import sha256 from 'sha256';

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.use(express.static('public'))
// app.use(express.static(path.resolve(__dirname, 'node_modules')));

app.get('/', (req, res) => {
  // App's index.html file
  const indexFile = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

  // App's app.js file
  const mainJsFile = fs.readFileSync(path.join(__dirname, '../public', 'js', 'app.js'), 'utf8');

  // App's app.css file
  // mainCssFile = fs.readFileSync(path.join(__dirname, 'public', 'css', 'main.min.css'), 'utf8');
  const mainCssFile = ['esta es el Js1'];

  // Add a variable query value to each of the resources url's, therefore avoiding cache when neces
  const finalIndexFile = indexFile
    .replace('/* ::APP_CSS:: */', `css/main.min.css?q=${sha256(mainCssFile).slice(0, 5)}`)
    .replace('/* ::APP_JS:: */', `js/app.js?q=${sha256(mainJsFile).slice(0, 5)}`);

  return res.send(finalIndexFile);
});

app.listen(port, () => console.log(`App listening on port ${port}`));
