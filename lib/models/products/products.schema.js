'use strict';

const mongoose = require('mongoose');

// {
//     "category": "electronics",
//     "display_name": "electronics",
//     "description": "text electronics",
//     "id": 2
//   }

const product = mongoose.Schema({
  category: { type: String, required: true },
  display_name: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model('product', product);
