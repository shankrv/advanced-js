/* --- App File ---*/
const fs = require('fs'); // file-system
const http = require('http'); // http-module
const url = require('url'); // url-module


const file = fs.readFileSync(`${__dirname}/data/data.json`, 'UTF-8'); // read JSON data from file
const json = JSON.parse(file);

// create server
const server = http.createServer((req, res) => {
  const URL = url.parse(req.url, true); // ret URL obj. after parse

  const route = URL.pathname;
  const id = URL.query.id;

  // Homepage
  if (route === '/') {
    res.writeHead(202, { 'Content-Type': 'text/html' });
    res.end('web-server : online');
  }

  // Products Overview
  else if (route === '/products') {
    res.writeHead(202, { 'Content-Type': 'text/html' });

    fs.readFile(`${__dirname}/templates/overview.html`, 'UTF-8', (err, data) => {
      let overview = data;

      fs.readFile(`${__dirname}/templates/prod-cards.html`, 'UTF-8', (err, data) => {
        const cards = json.map(lap => replaceHolders(data, lap)).join(''); // card elem to string
        overview = overview.replace('{%cards%}', cards);
        res.end(overview);
      });
    });

  }

  // Laptop Details
  else if (route === '/laptop' && id < json.length) {
    res.writeHead(202, { 'Content-Type': 'text/html' });

    fs.readFile(`${__dirname}/templates/laptop.html`, 'UTF-8', (err, data) => {
      const laptop = json[id]; // get laptop obj from JSON data

      // replace placeholders w. the data
      const output = replaceHolders(data, laptop);
      res.end(output);
    });
  }

  // Serve Images
  else if ((/\.(jpg|jpeg|png|gif)$/i).test(route)) {
    fs.readFile(`${__dirname}/data/img${route}`, (err, data) => {
      res.writeHead(200, { 'Content-Type': 'image/jpg' });
      res.end(data);
    });
  }

  // No URL found
  else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('Requested URL doesn\'t exist.');
  }

});

// listen server
server.listen(5000, 'localhost', () => {
  console.log('web : https://localhost:5000');
});

function replaceHolders(origHtml, laptop) {
  let output = origHtml.replace(/{%price%}/g, laptop.price);
  output = output.replace(/{%image%}/g, laptop.image);
  output = output.replace(/{%productName%}/g, laptop.productName);
  output = output.replace(/{%disp%}/g, laptop.screen);
  output = output.replace(/{%cpu%}/g, laptop.cpu);
  output = output.replace(/{%stor%}/g, laptop.storage);
  output = output.replace(/{%ram%}/g, laptop.ram);
  output = output.replace(/{%desc%}/g, laptop.description);
  output = output.replace(/{%id%}/g, laptop.id);
  return output;
}
