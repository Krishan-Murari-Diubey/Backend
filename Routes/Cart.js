const express = require('express');
const { addToCart, fetchCartByUser, deleteFromCart, updateCart } = require('../Controller/Cart');

const router = express.Router();
//  /products is already added in base path
router.post('/', addToCart)
      .get('/', fetchCartByUser)
      .delete('/:id', deleteFromCart)
      .patch('/:id', updateCart)


exports.router = router;