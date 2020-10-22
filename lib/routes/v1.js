'use strict';

const express = require('express');
const router = express.Router();
const category = require('../models/categories/category');
const product = require('../models/products/product');

// router.param ==> a middleware function that will be fired when req.params match the first argument
router.param('model', getModel);

router.get('/:model', getAllHandler);
router.get('/:model/:id', getOneHandler);
router.post('/:model', createHandler);
router.put('/:model/:id', updateHandler);
router.delete('/:model/:id', deleteHandler);

function getModel(req, res, next) {
  const model = req.params.model;
  console.log('__MODEL__', model);
  switch (model) {
    case 'products':
      req.model = product;
      break;
    case 'categories':
      req.model = category;
      break;
    default:
      throw new Error('Invalid Model');
  }
  next();
}

async function getAllHandler(req, res, next) {
  try {
    const result = await req.model.get();
    res.status(200).json(result);
  } catch (error) {
    next();
  }
}
async function getOneHandler(req, res, next) {
  try {
    const result = await req.model.get(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    next();
  }
}

async function createHandler(req, res, next) {
  try {
    const result = await req.model.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    next();
  }
}
async function updateHandler(req, res, next) {
  try {
    const result = await req.model.update(req.params.id, req.body);
    res.status(200).json(result);
  } catch (error) {
    next();
  }
}
async function deleteHandler(req, res, next) {
  try {
    const result = await req.model.delete(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    next();
  }
}
module.exports = router;
