const express = require('express');
const router = express.Router();
const category = require('../models/categories/category');

const categories = [];

router.post('/', async (req, res) => {
  const result = await category.create(req.body);
  res.status(201).json(result);
});
router.get('/', async (req, res) => {
  // console.log('categories');
  const result = await category.get();
  res.status(200).json(result);
});
router.get('/:id', async (req, res) => {
  const result = await category.get(req.params.id);
  res.status(200).json(result[0]);
});
router.put('/:id', async (req, res) => {
  const result = await category.update(req.params.id, req.body);
  res.status(200).json(result);
});
router.delete('/:id', async (req, res) => {
  const result = await category.delete(req.params.id);
  res.status(200).json(result);
});

module.exports = router;

// /api/v1/categories/
