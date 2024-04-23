const express = require("express");
const app = express();
const morgan = require("morgan");
const  expressHandlebars = require('express-handlebars');
const path = require("path");
const port = 3000;
//HTTP logger
app.use(morgan("combined"));

app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', expressHandlebars.engine(
));
app.set('view engine', 'handlebars');
app.set("views", path.join(__dirname, "/resources/views"));



// Define a route
app.get('/', (req, res) => {
  res.render('home.handlebars')
});
app.get('/product', (req, res) => {
  res.render('product.handlebars')
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
