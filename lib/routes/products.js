const express = require('express');
const router = express.Router();
const product = require('../models/products/product');

const products = [];
router.post('/', async (req, res) => {
  // const { category, display_name, description } = req.body;
  // const product = { category, display_name, description };
  // product._id = products.length + 1;
  // products.push(product);
  const result = await product.create(req.body);
  res.status(201).json(result);
});
router.get('/', async (req, res) => {
  const result = await product.get();
  res.status(200).json(result);
});
router.get('/:id', async (req, res) => {
  const result = await product.get(req.params.id);
  res.status(200).json(result[0]);
});
router.put('/:id', async (req, res) => {
  const result = await product.update(req.params.id, req.body);
  res.status(200).json(result);
});
router.delete('/:id', async (req, res) => {
  const result = await product.delete(req.params.id);
  res.status(200).json(result);
});

module.exports = router;
