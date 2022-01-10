var express = require('express')
var router = express.Router()
const product = require('../db_handlers/products')

router.get('/', (req, res) => {
  product.getProducts()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
})

module.exports = router
