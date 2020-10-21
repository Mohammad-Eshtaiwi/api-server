'use strict';

const mongoose = require('mongoose');

// "name": "electronics",
//       "display_name": "dispalyelectronics",
//       "description": "electronics category"
//     }

const category = mongoose.Schema({
  name: { type: String, required: true },
  display_name: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model('category', category);
