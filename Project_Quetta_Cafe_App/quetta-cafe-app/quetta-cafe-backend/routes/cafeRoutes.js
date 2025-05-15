const express = require('express');
const router = express.Router();
const CafeItem = require('../models/CafeItem');

// Get all items
router.get('/', async (req, res) => {
  const items = await CafeItem.find();
  res.json(items);
});

module.exports = router;
