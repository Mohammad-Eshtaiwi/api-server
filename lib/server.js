const express = require('express');
const timestamp = require('./middlewares/timestamp');
const logger = require('./middlewares/logger');
const notFoundHandler = require('./middlewares/404');
const errorHandler = require('./middlewares/500');

const app = express();

app.use(express.json());
app.use(timestamp);
app.use(logger);

const products = [];

// "products": [
//     {
//       "category": "electronics",
//       "display_name": "electronics",
//       "description": "text electronics",
//       "id": 2
//     }
//   ]

// products
app.post('/api/v1/products', (req, res) => {
  const { category, display_name, description } = req.body;
  const product = { category, display_name, description };
  product._id = products.length + 1;
  products.push(product);
  res.status(201).json(product);
});
app.get('/api/v1/products', (req, res) => {
  res.status(200).json(products);
});
app.get('/api/v1/products/:id', (req, res) => {
  //   console.log('body id', req.body);
  const result = products.filter(product => parseInt(req.params.id) === product._id);
  //   console.log(result);
  res.status(200).json(result[0]);
});
app.put('/api/v1/products/:id', (req, res) => {
  let index = -1;
  products.forEach((item, i) => {
    if (parseInt(req.params.id) === item._id) index = i;
  });
  let id = products[index]._id;
  products[index] = req.body;
  products[index]._id = id;
  res.status(200).json(products[index]);
});
// splice(0,1)
app.delete('/api/v1/products/:id', (req, res) => {
  const deleted = products.filter((product, index) => {
    if (parseInt(req.params.id) === product._id) {
      products.splice(index, index + 1);
      return product;
    }
  });

  res.status(200).json(deleted);
});

// categories

// {
//   "id": 2,
//   "name": "electronics",
//   "display_name": "dispalyelectronics",
//   "description": "electronics category"
// }

const categories = [];

app.post('/api/v1/categories', (req, res) => {
  const { name, display_name, description } = req.body;
  const category = { name, display_name, description };
  category._id = categories.length + 1;
  categories.push(category);
  // console.log('categories added', categories);
  res.status(201).json(category);
});
app.get('/api/v1/categories', (req, res) => {
  // console.log('categories');
  res.status(200).json(categories);
});
app.get('/api/v1/categories/:id', (req, res) => {
  const result = categories.filter(category => parseInt(req.params.id) === category._id);

  res.status(200).json(result[0]);
});
app.put('/api/v1/categories/:id', (req, res) => {
  let index = -1;
  categories.forEach((item, i) => {
    if (parseInt(req.params.id) === item._id) index = i;
  });
  let id = categories[index]._id;
  categories[index] = req.body;
  categories[index]._id = id;
  res.status(200).json(categories[index]);
});
app.delete('/api/v1/categories/:id', (req, res) => {
  const deleted = categories.filter((category, index) => {
    if (parseInt(req.params.id) === category._id) {
      categories.splice(index, index + 1);
      return category;
    }
  });

  res.status(200).json(deleted);
});

// make bad request
app.get('/bad', (req, res) => {
  throw new Error('a test error');
});
// all other routes
app.use('*', notFoundHandler);
// app.use(errorHandler);
app.use(errorHandler);
module.exports = {
  server: app,
  start: port => {
    app.listen(port, () => {
      const PORT = port || process.env.PORT || 5000;
      console.log(`up and running on port ${PORT}`);
    });
  },
};
