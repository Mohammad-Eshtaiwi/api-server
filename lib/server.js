const express = require('express');
const timestamp = require('./middlewares/timestamp');
const logger = require('./middlewares/logger');
const notFoundHandler = require('./middlewares/404');
const errorHandler = require('./middlewares/500');
// const products = require('./routes/products');
// const categories = require('./routes/categories');
const v1 = require('./routes/v1');
const app = express();

app.use(express.json());
app.use(timestamp);
app.use(logger);
// app.use('/api/v1/products', products);
// app.use('/api/v1/categories', categories);
app.use('/api/v1', v1);

// "products": [
//     {
//       "category": "electronics",
//       "display_name": "electronics",
//       "description": "text electronics",
//       "id": 2
//     }
//   ]

// products

// categories

// {
//   "id": 2,
//   "name": "electronics",
//   "display_name": "dispalyelectronics",
//   "description": "electronics category"
// }

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
